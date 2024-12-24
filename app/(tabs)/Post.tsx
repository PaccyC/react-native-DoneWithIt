import { View, Text, KeyboardAvoidingView, Platform ,StyleSheet} from 'react-native'
import * as Yup from 'yup'

import React from 'react'
import Screen from '@/components/Screen'
import { CustomForm, CustomSubmitButton,CustomFormPicker, FormField } from '@/components/forms'
import Category from '../interfaces/category'


const categories:Category[] =[
   {
    label: "Category 1",
    value: "1"
   },
   {
    label: "Category 2",
    value: "2"
   }
]

const validationSchema= Yup.object().shape({
  title: Yup.string().required().min(3).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description:Yup.string().min(10).label("Description")
})


const Post = () => {
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
            description:""
           }}
           validationSchema={validationSchema}
           onSubmit={(values)=>console.log(values)
           }
        >
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