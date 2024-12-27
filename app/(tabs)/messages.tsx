import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from "@/components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "@/components/lists";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";


const initialMessages = [
  {
    id: 1,
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: require("@/assets/images/mosh.jpg"),
  },
  {
    id: 2,
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("@/assets/images/mosh.jpg"),
    
  },
];

interface Props {

  
}


function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: any) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };


  const translateX= useSharedValue(0)

  const swipeGesture= Gesture.Pan()
  .onUpdate((event)=>{
    translateX.value = Math.max(-100,Math.min(0,event.translationX))
  })
  .onEnd(()=>{
    if(translateX.value < -70){
      // runOnJS(onSwipe)();
      translateX.value= withSpring(-100);
    }
    else{
      translateX.value = withSpring(0);
    }
  })

  const animatedStyle=useAnimatedStyle(()=>({
    transform:[{translateX: translateX.value}]
  }));

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.swipeableContainer}>
         <ListItemDeleteAction onPress={()=>{}}/>

        <GestureDetector gesture={swipeGesture}>

            <Animated.View style={[styles.container,animatedStyle]}>

          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            onSwipe={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />

       </Animated.View>
       </GestureDetector>
       </View>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("@/assets/images/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    padding:15,
    backgroundColor: Colors.white,
    alignItems:"center",
    
},

swipeableContainer:{
  width: "100%",
  position: "relative"
},
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
});

export default MessagesScreen;