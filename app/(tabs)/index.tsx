import {Button, Image, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions'
import { Colors } from '@/constants/Colors';
import Login from '../(site)/auth/Login';
import Register from '../(site)/auth/Register';
import Post from './Post';
import Screen from '@/components/Screen';
import ImageInput from '@/components/ImageInput';



export default function HomeScreen() {

  const [imageUri,setImageUri]= useState("");

 




  return (
 
     <Screen>
      <>
      {/* <Button title='Select Image' onPress={selectImage}/>
      <Image source={{uri:imageUri}} height={200} width={200}/> */}
      <ImageInput 
      imageUri={imageUri}
      onChangeImage={uri=>setImageUri(uri)}
      />
      </>
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