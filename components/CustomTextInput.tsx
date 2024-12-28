import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Colors } from '@/constants/Colors'

interface Props{
   icon: any,
   placeholder?: any,
   value: any;
   
}
const CustomTextInput = ({icon,placeholder,value,...props}:Props) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon}  size={20} color={Colors.medium}/>
      <TextInput 
      placeholderTextColor={Colors.medium}
      style={styles.textInput}
       placeholder={placeholder}
       {...props}

      />
    </View>
  )
}

export default CustomTextInput


const styles = StyleSheet.create({

    container:{
        backgroundColor:Colors.white,
        borderRadius:25,
        flexDirection: "row",
        width:  "100%",
        padding: 5,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput:{
        fontSize:18,
        color: Colors.medium,
        flex: 1
    },
    icon:{
        marginRight:10,
        alignContent: "center"
    }
})