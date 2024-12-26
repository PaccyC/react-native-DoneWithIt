import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


interface ButtonProps {
    title: string;
    onPress:  ()=> void;
    color?: string;
}


const AppButton = ({title,onPress,color}:ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#fc5c65",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        marginTop: 10
    },
    text:{
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})