import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingDetails from '../(tabs)/listing-details';
import ListingsScreen from '../(tabs)/listings';
import routes from './routes';

const Stack= createNativeStackNavigator();

const FeedNavigator = () =>(
    <Stack.Navigator screenOptions={{
        headerShown: false,
        presentation: "modal"
    }}
    
    >
        <Stack.Screen name={routes.LISTING} component={ListingsScreen}/>
        <Stack.Screen 
          name={routes.LISTING_DETAILS}
          component={ListingDetails}
          options={{
            headerShown:false
          }}
          />
    </Stack.Navigator>
)

export default FeedNavigator;