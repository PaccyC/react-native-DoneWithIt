import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Messages from '../(tabs)/messages';
import ListingDetails from '../(tabs)/listing-details';
import MyAccount from '../(tabs)/my-account';
import MessagesScreen from '../(tabs)/messages';
import routes from './routes';

const Stack= createNativeStackNavigator();

const AccountNavigator = () =>(
    <Stack.Navigator>
        <Stack.Screen name={routes.ACCOUNT} component={MyAccount}/>
        <Stack.Screen 
          name='Messages' 
          component={MessagesScreen}
      
          />
    </Stack.Navigator>
)

export default AccountNavigator;