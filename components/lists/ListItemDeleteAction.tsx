import { Colors } from "@/constants/Colors"
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface Props{
  onPress :  ()=> void;
}
const ListItemDeleteAction = ({onPress}:Props) => {
  return (
    <View style={styles.hiddenAction}>
      <MaterialCommunityIcons name='trash-can-outline' color="black" size={20} onPress={onPress}/>
    </View>
  )
}



export default ListItemDeleteAction

const styles = StyleSheet.create({
    hiddenAction:{
        backgroundColor: Colors.danger,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 20,
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius:10,
      }
})