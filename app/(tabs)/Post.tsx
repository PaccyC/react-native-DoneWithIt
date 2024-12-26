import { View, Text, KeyboardAvoidingView, Platform ,StyleSheet} from 'react-native'
import * as Yup from 'yup'
import Screen from '@/components/Screen'
import { CustomForm, CustomSubmitButton,CustomFormPicker, FormField } from '@/components/forms'
import Category from '../interfaces/category'
import CategoryPickerItem from '@/components/CategoryPickerItem'
import FormImagePicker from '@/components/forms/FormImagePicker'
import useLocation from '@/hooks/useLocation'

const categories:Category[] = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const validationSchema= Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description:Yup.string().min(10).label("Description"),
  images: Yup.array().min(1,"Please select atleast one image.")
})


const Post = () => {

  const location= useLocation()
  
  return (
    <KeyboardAvoidingView
    
    behavior={Platform.OS === 'ios' ?  "padding": "height"}
    style={{ flex: 1 }}
    >
     <Screen style={styles.container}>

        <CustomForm
           initialValues={{
            title:"",
            price:"",
            category:null,
            description:"",
            images:[],
           }}
           validationSchema={validationSchema}
           onSubmit={(values)=>console.log(values,location)
           }
        >
          <FormImagePicker name='images'/>
          <FormField
           name='title'
           placeholder="Title"
           autoCapitalize= "none"
           autoCorrect = {false}
          />
          <FormField
           name='price'
           placeholder="Price"
           autoCapitalize= "none"
           autoCorrect = {false}
           keyboardType= "numeric"
           maxLength= {8}
          />

          <CustomFormPicker
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
           items={categories}
           name='category'
           placeholder='Category'
          />
          <FormField
           name='description'
           multiline
           numberOfLines={3}
           placeholder="Description"
           autoCapitalize= "none"

           autoCorrect = {false}
          />

          <CustomSubmitButton
            title='Post'
          />

        </CustomForm>
     </Screen>

    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container:{
    padding: 10
  }
})
export default Post