import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  TouchableHighlight } from 'react-native-gesture-handler';

import { Colors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


interface ListItemProps {
    image?: any;
    title: string;
    subtitle?: string;
    onPress?: ()=> void;
    onSwipe: ()=> void;
    ImageComponent?: React.ReactNode,
    animatedStyle?: any
}

const ListItem = ({image,title,subtitle,onPress,ImageComponent}:ListItemProps) => {
 
    return (
   

      
          <TouchableHighlight underlayColor={Colors.light_gray} onPress={onPress}>

 
            <View style={styles.container}>
              {ImageComponent}
              {image && 
              <Image style={styles.image} source={image} />
              }
              
              <View style={styles.detailsContainer}>

                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
               {subtitle &&  <Text style={styles.subTitle} numberOfLines={1} ellipsizeMode='tail'>{subtitle}</Text>}
              </View>
              
                <MaterialCommunityIcons 
                  name='chevron-right' 
                  size={25}
                  color={Colors.medium}
                />

              
            </View>

          </TouchableHighlight>
          
)}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding:15,
        backgroundColor: Colors.white,
        alignItems:"center",
        
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35

    },
    detailsContainer:{
        flex: 1,
        marginLeft: 10,
        justifyContent:"center",        
    },

    title:{
        fontSize: 18,
        fontWeight: "500"
    },
    subTitle:{
        fontSize: 16,
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