import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "@/components/Card";
import { Colors } from "@/constants/Colors";
import Screen from "@/components/Screen";
import routes from "../navigation/routes";
const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 1000,
    image: require("../../assets/images/couch.jpg"),
  },
];

function ListingsScreen({navigation}:{navigation: any}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
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