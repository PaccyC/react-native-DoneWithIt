import { StyleSheet, Image, Platform, FlatList, StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ListItem from '@/components/ListItem';
import ListItemSeparator from '@/components/ListItemSeparator';
import { useState } from 'react';


const userMessages=[
  {
    id: 1,
    title: 'Hello',
    description: 'This is a message',
    image: require("../../assets/images/mosh.jpg")
  },
  {
    id: 2,
    title: 'Hi',
    description: 'This is another message',
    image: require("../../assets/images/mosh.jpg")
  }
]
export default function TabTwoScreen() {
  const [messages,setMessages]= useState(userMessages)

  const handleSwipe =(id: string)=>{

    setMessages((prevMessages)=> prevMessages.filter((item)=> item.id.toString() !== id))
  }
  return (
    <SafeAreaView style={styles.screen}>

        <FlatList
            style= {styles.screen}
            data={messages}
            keyExtractor={message=> message.id.toString()}
            renderItem={({item})=> 
      
          <ListItem  
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={()=>console.log("Selected")}
            onSwipe={()=> handleSwipe(item.id.toString())}
            
          />}

         ItemSeparatorComponent={()=> <ListItemSeparator/>}

        />
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  screen:{
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0
  },
  

});
