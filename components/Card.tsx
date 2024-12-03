import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

interface CardProps{
    title: string;
    subtitle: string;
    image: any;
}
const Card = ({title,subtitle,image}:CardProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}/>
      <View style={styles.detailsContainer}>
        <Text style={[styles.text,{marginBottom: 10}]}>{title}</Text>
        <Text style={[styles.text,{fontWeight: "bold", color: Colors.secondary}]}>{subtitle}</Text>

      </View>
    </View>
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