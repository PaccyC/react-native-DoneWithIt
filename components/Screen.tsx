import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'


interface ScreenProps{
    children: React.ReactNode
    style: any
}
const Screen = ({children,style}:ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screen,style]}>
        {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen:{
      paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
      flex: 1
    },
    
  
  });