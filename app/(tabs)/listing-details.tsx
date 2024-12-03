import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ListItem from '@/components/ListItem'
import Screen from '@/components/Screen'
import Card from '@/components/Card'


const listings=[
  {
    id:1,
    title:"Red Jacket for sale",
    price: 100,
    image: require('../../assets/images/jacket.jpg'),
  },
  {
    id:2,
    title:"Couch in good condition",
    price: 1000,
    image: require('../../assets/images/couch.jpg'),
  }
]
const ListingDetails = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
         data={listings}
         keyExtractor={listing => listing.id.toString()}
         renderItem={({item}) => (
           <Card
           image={item.image}
           title={item.title}
           subtitle={`$${item.price}`}

           />
         )}
         />
      
    </Screen>
  )
}

export default ListingDetails

const styles = StyleSheet.create({


  screen:{
   padding:20,
   backgroundColor: Colors.light_gray
  },
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