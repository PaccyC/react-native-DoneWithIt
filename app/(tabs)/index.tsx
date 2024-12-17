import { Image, StyleSheet, View, ImageBackground, Text} from 'react-native';


import AppButton from '@/components/AppButton';
import { Colors } from '@/constants/Colors';
import Card from '@/components/Card';
import Screen from '@/components/Screen';
import CustomTextInput from '@/components/CustomTextInput';
import CustomPicker from '@/components/CustomPicker';
import { useState } from 'react'
import { Category } from '../interfaces/category';

const categories=[
  {label:"Furniture", value: 1},
  {label:"Cameras", value: 2},
  {label:"Clothing", value: 3}
]
export default function HomeScreen() {
  const [category, setCategory] = useState<Category>(categories[0]);
  return (
 
    //  <ImageBackground
    //  blurRadius={10}
    //  style={styles.background}
    //  source={require("../../assets/images/background.jpg")}
    //  >

    //  <View style={styles.logoContainer}>
    //   <Image
    //   style={styles.logo}
    //   source={require("../../assets/images/logo-red.png")}/>

    //   <Text  style={styles.tagline}>Sell What You Don't Need</Text>

    //  </View>
    //  <View style={styles.buttonsContainer}>
    //  <AppButton 
    //     title='Login' 
    //     onPress={()=>console.log("tapped") } 
    //     color='#fc5c65'
    //     />
    //   <AppButton 
    //   title='Register' 
    //   onPress={()=>console.log("tapped")}
    //   color='#4ecdc4'
    //   />

    //  </View>

    //  </ImageBackground>

    <Screen
     style={styles.screen}
    >
      <CustomPicker 
      placeholder= "Category"
      icon="apps"
      categories={categories}
      selectedItem={category!}
      onSelectItem = {(item:Category)=> setCategory(item)}

      />
      
      {/* <Card
      
      title='Red Jacket for Sale'
      subtitle='$100'
      image={require('../../assets/images/jacket.jpg')}
      />
      <Card
      
      title='Red Jacket for Sale'
      subtitle='$100'
      image={require('../../assets/images/jacket.jpg')}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({

  cardContainer:{
     backgroundColor: Colors.white,
      padding: 20,
      paddingTop: 100
    
  },
  background:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"

  },
  logo:{
    height:100,
    width:100,
  },
  logoContainer:{
    position: "absolute",
    top: 70,
    alignItems: "center"

  },
  buttonsContainer:{
    width: "100%",
    padding: 15,
    flexDirection: "column",
    gap: 10
  },
  tagline:{
    fontSize: 25,
    fontWeight :"600",
    paddingVertical: 20,
  },

  screen:{
    padding:20,
    backgroundColor: Colors.light_gray
  }

})