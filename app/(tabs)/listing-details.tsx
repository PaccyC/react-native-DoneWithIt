import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import ListItem from '@/components/lists/ListItem'



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
const ListingDetails = ({route}: {route:any}) => {
  const listing= route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
          onSwipe={()=>{}}
            image={require("../../assets/images/jacket.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

export default ListingDetails

const styles = StyleSheet.create({


  screen:{
   padding:15,
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