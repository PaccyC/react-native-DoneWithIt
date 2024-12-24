import Category from '@/app/interfaces/category';
import React from 'react'
import { View,StyleSheet, Text } from 'react-native';
import Icon from './Icon';


type Props ={
    onPress: ()=> void;
    item: Category;
}


const CategoryPickerItem = ({item,onPress}:Props) => {
  return <View style={styles.container}>
    <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60}   />
    <Text style={styles.label}>{item.label}</Text>

  </View>
}


const styles = StyleSheet.create({
    container:{
    paddingHorizontal: 20,
    paddingVertical:15,
    alignItems:"center",
    width:"33%"
    },
    label:{
        marginTop: 5,
        textAlign: "center"
    }
})
export default CategoryPickerItem