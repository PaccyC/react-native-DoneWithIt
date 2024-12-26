import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingDetails from '../(tabs)/listing-details'
import Post from '../(tabs)/Post'
import MyAccount from '../(tabs)/my-account'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'

const Tab= createBottomTabNavigator()

const AppNavigator = ()=>(
    <Tab.Navigator >
        <Tab.Screen name='Feed' component={FeedNavigator}/>
        <Tab.Screen name='ListingEdit' component={Post}/>
        <Tab.Screen name='Account' component={AccountNavigator}/>

    </Tab.Navigator>
)

export default AppNavigator;