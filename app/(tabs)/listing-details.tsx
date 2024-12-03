import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ListItem from '@/components/ListItem'

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/images/jacket.jpg")}/>  
      <View style={styles.detailsContainer}>
        <Text style={[styles.text,styles.title]}>Red Jacket for sale</Text>
        <Text style={styles.price}>$100</Text>

        <View style={styles.userContainer}>
            <ListItem
            image={require("../../assets/images/mosh.jpg")}
            title='Mosh Hamedani'
            subtitle='5 Listings'
            onPress={()=>console.log("selected")} 
            />

        </View>


      </View>

    </View>
  )
}

export default ListingDetails

const styles = StyleSheet.create({

    detailsContainer:{
     padding: 15,
     
    },
    image:{
        width: '100%',
        height: 300
    },

    text:{
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    card: {
        borderRadius: 15,
        backgroundColor: Colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },

    title:{
        fontSize: 24,
        fontWeight: '500',
    },
    price:{
        color: Colors.secondary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10
    } ,

    userContainer:{
        marginVertical: 50
    }
   


})