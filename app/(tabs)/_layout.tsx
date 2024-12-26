
import {useEffect, useState} from 'react';
import { Platform ,Keyboard, Text, Button} from 'react-native';
// import { Tabs } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen from '@/components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from '../navigation/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from '../navigation/navigationTheme';
import AppNavigator from '../navigation/AppNavigator';



// const Tweets =({navigation}: {navigation:any}) => {
//   return(
//   <Screen>
//     <Text>Tweets</Text>
//     <Button title='View tweets' 
//     onPress={()=> navigation.navigate('TweetDetails' ,{id: "Tweet Details"}  
//     )}/>
//   </Screen>
//   )
// }

// const TweetDetails = ({route}:{route:any}) => (
//   <Screen>
//     <Text>Tweet Details {route.params.id}</Text>
//   </Screen>
// )
// const Stack = createNativeStackNavigator();

// const StackNavigator = ()=>(
//   <Stack.Navigator 
//   initialRouteName='Tweets'
//   screenOptions={{
//   headerStyle: {backgroundColor: "dodgerblue"},
//   headerTintColor: "white",
  
//   }

//   }
//   >
//    <Stack.Screen 
//    name='Tweets'
//    component={Tweets}
   
    
//     />
//    <Stack.Screen 
//    name='TweetDetails' 
//    component={TweetDetails}
//    options={({route})=>({title: route.params.id})}
//    />
//   </Stack.Navigator>
// )


// const Feed = ()=>(
//   <Screen>
//     <Text>Feed</Text>
//   </Screen>
// )
// const Account = ()=>(
//   <Screen>
//     <Text>Account</Text>
//   </Screen>
// )
// const Tab= createBottomTabNavigator();
// const TabsNavigator= ()=> (
//   <Tab.Navigator
//   screenOptions={{
//     tabBarActiveTintColor: "white",
//     tabBarActiveBackgroundColor:"tomato",
//     tabBarInactiveBackgroundColor: "#eee",
//     tabBarInactiveTintColor:"black"
//   }}
//   >
//      <Tab.Screen 
//      name='Feed' 
//      component={Tweets}
//      options={{
//       tabBarIcon: ({size,color})=> <MaterialCommunityIcons name='home' size={size} color={color}/>
//      }}
//      />
//      <Tab.Screen name='Account' component={Account}/>

//   </Tab.Navigator>
// )
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(()=>{
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow",()=>{
      setIsKeyboardOpen(true)
    })
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide",()=>{
      setIsKeyboardOpen(false)
    })

    return ()=>{
      keyboardDidShowListener.remove(),
      keyboardDidHideListener.remove()
    }

  },[])
  

  return (
      
      <AppNavigator/>

  );
}
