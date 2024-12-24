import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Colors } from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
interface Props{
    imageUri?: string;
    onChangeImage?: (uri:string)=> void ;
}



export default function ImageInput({imageUri,onChangeImage}:Props) {

    useEffect(()=>{
        requestPermission();
       },[])
     

    const requestPermission =async()=>{
        const {granted}= await ImagePicker.requestCameraPermissionsAsync();
        if(granted){2
         alert("Please allow access to the camera!")
        }
       }


    const handlePress = ()=>{
        if(!imageUri) selectImage()
        else Alert.alert("Delete",
                  "Are you sure you want to delete this image?",
                  [{
                    text: "Yes",onPress: ()=> onChangeImage?.("")},
                 {text:"No"}]
                  )
    }
    const selectImage = async()=>{
        try {
            
            const result= await ImagePicker.launchImageLibraryAsync({
                quality:1
            });
            if(!result.canceled){
                onChangeImage?.(result.assets[0].uri);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>

    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons color={Colors.medium} size={50} name='camera'/>
      )}
      {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:Colors.white,
        borderRadius:15,
        height:100,
        width:100,
        justifyContent:"center",
        overflow: 'hidden'
    },
    image:{
        height:"100%",
        width:"100%",
        resizeMode: "cover"
        
    }
})