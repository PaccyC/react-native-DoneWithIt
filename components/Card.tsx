import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface CardProps{
    title: string;
    subtitle: string;
    image: any;
    onPress : ()=>void;
}
const Card = ({title,subtitle,image,onPress}:CardProps) => {
  return (
   <TouchableWithoutFeedback onPress={onPress}>

    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailsContainer}>
        <Text style={[styles.text,{marginBottom: 10}]}>{title}</Text>
        <Text style={[styles.text,{fontWeight: "bold", color: Colors.secondary}]}>{subtitle}</Text>

      </View>
    </View>
   </TouchableWithoutFeedback>
  )
}

export default Card

const styles = StyleSheet.create({

    card: {
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image:{
        height: 200,
        width: "100%"
    },
    detailsContainer:{
        padding: 20
    },
    text:{
        fontSize: 18,
        fontFamily: 'Roboto'
    }
})