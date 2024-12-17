import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';


type Props ={
    label: string;
    onPress: ()=> void;
}
const PickerItem = ({label,onPress}:Props) => {
  return (

    <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
  
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