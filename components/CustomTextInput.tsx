import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'

interface Props{
   icon: any,
   placeholder?: any
   
}
const CustomTextInput = ({icon,placeholder,...props}:Props) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon}  size={20} color={Colors.medium}/>
      <TextInput 
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
        padding: 10,
        marginVertical: 10,
        alignItems: "center"
    },
    textInput:{
        fontSize:18,
        color: Colors.dark_2,
        flex: 1
    },
    icon:{
        marginRight:10,
        alignContent: "center"
    }
})