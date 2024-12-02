import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ViewImage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}/>
        <View style={styles.deleteIcon}/>
        <Image 
        style={styles.image}
        resizeMode='contain'
        source={require("../../assets/images/chair.jpg")}/>
      
    </View>
  )
}

export default ViewImage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000"
    },
    image:{
        width: '100%',
        height: '100%'
    },
    closeIcon:{
        width: 50,
        height:50,
        backgroundColor: "fc5c65",
        position: "absolute",
        top: 30,
        left: 40
    },
    deleteIcon:{
        width: 50,
        height:50,
        backgroundColor: "fc5c65",
        position: "absolute",
        top: 30,
        right: 40
    }
})
