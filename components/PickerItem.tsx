import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Category from '@/app/interfaces/category';


type Props ={
    item: Category;
    onPress: ()=> void;
}
const PickerItem = ({item,onPress}:Props) => {
  return (

    <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{item.label}</Text>
  
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        color: Colors.dark_2,
        marginBottom: 20
    }
})