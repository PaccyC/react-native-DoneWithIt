import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector, TouchableHighlight } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Colors } from '@/constants/Colors';


interface ListItemProps {
    image: any;
    title: string;
    subtitle: string;
    onPress: ()=> void;
    onSwipe: ()=> void;
}

const ListItem = ({image,title,subtitle,onSwipe,onPress}:ListItemProps) => {
  const translateX= useSharedValue(0)

  const swipeGesture= Gesture.Pan()
  .onUpdate((event)=>{
    translateX.value = Math.max(-100,Math.min(0,event.translationX))
  })
  .onEnd(()=>{
    if(translateX.value < -50){
      runOnJS(onSwipe)();
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
   

      <View style={styles.swipeableContainer}>
        <View style={styles.hiddenAction}>
          <MaterialCommunityIcons name='trash-can-outline' color="black" size={20}/>
        </View>

        <GestureDetector gesture={swipeGesture}>

            <Animated.View style={[styles.container,animatedStyle]}>
          <TouchableHighlight underlayColor={Colors.light_gray} onPress={onPress}>

            <View style={styles.container}>
              <Image style={styles.image} source={image} />
              <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subtitle}</Text>
              </View>
            </View>

          </TouchableHighlight>
            </Animated.View>
        </GestureDetector>
      </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        gap: 10,
        padding:20,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35

    },
    details:{
        flexDirection: "column"
    },
    title:{
        fontSize: 18,
        fontWeight: "500"
    },
    subTitle:{
        fontSize: 18,
        color:Colors.medium
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
})