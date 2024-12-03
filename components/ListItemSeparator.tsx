import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const ListItemSeparator = () => {
  return (
    <View style={styles.separator}/>
  )
}

export default ListItemSeparator

const styles = StyleSheet.create({
    separator:{
        width: "100%",
        height: 1,
        backgroundColor: Colors.light_gray
 
    }
})