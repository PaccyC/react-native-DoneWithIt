import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React, { useRef } from 'react'


import ImageInput from './ImageInput';

interface Props{
    imageUris: string[];
    onRemoveImage: (uri: string)=> void;
    onAddImage: (uri:string)=> void;
}

const ImageInputList = ({onAddImage,onRemoveImage,imageUris}:Props) => {
    const scrollView= useRef()
    
  return (
    <View>
    <ScrollView 
    ref={scrollView} 
    horizontal={true} 
    onContentSizeChange={()=>scrollView.current.scrollToEnd()}
    
    >
    <View style={styles.container}>
      {imageUris.map(uri=> 
           <View key={uri} style={styles.image}>

             <ImageInput 
             imageUri={uri} 
             key={uri}
             onChangeImage={()=>onRemoveImage(uri)}/>
          </View>
             )}
            

     <ImageInput onChangeImage={uri=> onAddImage(uri)}/>
    </View>

    </ScrollView>
</View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
    container:{
     flexDirection: "row",

    },
    image:{
        marginRight: 10
    }
    
})