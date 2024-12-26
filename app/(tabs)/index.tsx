import {Button, StyleSheet} from 'react-native';
import { Colors } from '@/constants/Colors';

import Screen from '@/components/Screen';
import { Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';

const Tweets =({navigation}: {navigation:any}) => {
  return(
  <Screen>
    <Text>Tweets</Text>
    <Button title='View tweets' 
    onPress={()=> navigation.navigate('TweetDetails' ,{id: "Tweet Details"}  
    )}/>
  </Screen>
  )
}

const TweetDetails = ({route}:{route:any}) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)
const Stack = createNativeStackNavigator();

const StackNavigator = ()=>(
  <Stack.Navigator 
  initialRouteName='Tweets'
  screenOptions={{
  headerStyle: {backgroundColor: "dodgerblue"},
  headerTintColor: "white",
  
  }

  }
  >
   <Stack.Screen 
   name='Tweets'
   component={Tweets}
   
    
    />
   <Stack.Screen 
   name='TweetDetails' 
   component={TweetDetails}
   options={({route})=>({title: route.params.id})}
   />
  </Stack.Navigator>
)


export default function HomeScreen() {




  return (
 
     
      <StackNavigator/>
     
  );
}

const styles = StyleSheet.create({

  cardContainer:{
     backgroundColor: Colors.white,
      padding: 20,
      paddingTop: 100
    
  },
  background:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"

  },
  logo:{
    height:100,
    width:100,
  },
  logoContainer:{
    position: "absolute",
    top: 70,
    alignItems: "center"

  },
  buttonsContainer:{
    width: "100%",
    padding: 15,
    flexDirection: "column",
    gap: 10
  },
  tagline:{
    fontSize: 25,
    fontWeight :"600",
    paddingVertical: 20,
  },

  screen:{
    padding:20,
    backgroundColor: Colors.light_gray
  }

})