import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "@/components/Card";
import { Colors } from "@/constants/Colors";
import Screen from "@/components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";

type Image = {
  url: string;
};


type Listing = {
  id: number;
  title: string;
  price: number;
  images: Image[];
};
function ListingsScreen({navigation}:{navigation: any}) {
   const [listingItems, setListingItems] = useState<Listing[]>([])
  const loadListings = async()=> {
    const response= await listingsApi.getListings();
    if(response.status == 200){
      setListingItems(response.data);
    }
  }  
  useEffect(()=>{
    loadListings();
  },[])
  console.log(listingItems);
  
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listingItems}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.images[0].url}
            onPress={()=> navigation.navigate(routes.LISTING_DETAILS,item)}
          />
          
        )}
        showsVerticalScrollIndicator={false}
        
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: Colors.light_gray,
  },
});

export default ListingsScreen;