import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React from 'react'

import Screen from '@/components/Screen'
import ListItem from '@/components/lists/ListItem'
import Icon from '@/components/Icon'
import { Colors } from '@/constants/Colors'
import ListItemSeparator from '@/components/lists/ListItemSeparator'
import { useAuthContext } from '@/hooks/useAuthContext'



const menuItems= [
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor: Colors.primary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor: Colors.secondary
        },
        targetScreen: "Messages"
    }
]
const MyAccount = ({navigation}: {navigation: any}) => {

    const {user,setUser}= useAuthContext()
    return (
    <Screen style={styles.screen}>
        <View style={styles.container}>

        <ListItem
        title={user?.name}
        subtitle={user?.email}
        image={require("../../assets/images/mosh.jpg")}
        onSwipe={()=>{}}      />
        </View>
        <View style={styles.container}>
            <FlatList
            
            data={menuItems}
            renderItem={({item})=> 
            <ListItem
            onSwipe={()=>{}}
            onPress={()=>navigation.navigate("Messages")}
            title={item.title}
            ImageComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={40}  iconColor={Colors.white} />
           
            }
            />
            }
            keyExtractor={item => item.title}
            ItemSeparatorComponent={()=> <ListItemSeparator/>}
            />
        </View>

        <ListItem
        onSwipe={()=>{}}
        title='Log Out'
        onPress={()=>setUser(null)}
        ImageComponent= {
            <Icon name="logout" backgroundColor={Colors.light_yellow} size={30} iconColor={Colors.white}/>
        }
        />
    </Screen>
  )
}

export default MyAccount

const styles = StyleSheet.create({

    screen:{
        backgroundColor: Colors.light_gray
    },
    container:{
        marginVertical: 20
    }
    
})