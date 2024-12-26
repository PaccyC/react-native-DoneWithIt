import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'


interface Props{
    onPress : ()=>void;
}
const NewListingButton = ({onPress}:Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={Colors.white} size={40}/>
        </View>

    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: Colors.primary,
        borderColor: Colors.white,
        borderWidth: 10,
        bottom: 20,
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: "center"
    }
})