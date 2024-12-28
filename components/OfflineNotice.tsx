import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Constants from 'expo-constants'
import { useNetInfo } from '@react-native-community/netinfo'

const OfflineNotice = () => {
  const  netInfo= useNetInfo();
 
  if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  )
  return null;
  
}

export default OfflineNotice

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        justifyContent:"center",
        alignItems:"center",
        height:50,
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: "100%",
        zIndex:1
    },
    text:{
        fontSize: 18,
        color:Colors.white,
        textAlign:"center"
    }
})