import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text } from "react-native";
import Card from "@/components/Card";
import { Colors } from "@/constants/Colors";
import Screen from "@/components/Screen";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import ActivityIndicator from "@/components/ActivityIndicator";
import useApi from "@/hooks/useApi";
import {useNetInfo} from '@react-native-community/netinfo'
import AsyncStorage from "@react-native-async-storage/async-storage";

function ListingsScreen({navigation}:{navigation: any}) {

   const netInfo= useNetInfo()
  

  //  Caching

  const storeandReadData= async()=>{
     try {
      await AsyncStorage.setItem("person",JSON.stringify({id:1,name: "Paccy"}))
      const value= await AsyncStorage.getItem("person")
      return value != null ? JSON.parse(value) : null;
     } catch (error) {
      console.log(error);
      
     }
  }
  const {request:loadListings,loading,error,data:listingItems}= useApi(listingsApi.getListings)
  
  useEffect(()=>{
    loadListings();
  },[])
  
  
  return (
    <Screen style={styles.screen}>

      {error && <>
      <Text>Couldn't retrieve the listings</Text>
      <Button title="Retry" onPress={loadListings}/>
      </>}

      <ActivityIndicator visible={loading}/>

      <FlatList
        data={listingItems}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={ require("../../assets/images/jacket.jpg")}
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
