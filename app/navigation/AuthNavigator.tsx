import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../(site)/auth/Register';
import Login from '../(site)/auth/Login';
import Welcome from '../(site)/auth/Welcome';
import navigationTheme from './navigationTheme';

const Stack = createNativeStackNavigator();

const AuthNavigator=  ()=>(
    <Stack.Navigator 
    initialRouteName='Welcome'
    screenOptions={{
        headerTintColor: navigationTheme.colors.primary,
        
    }}
    >
        <Stack.Screen name='Welcome' component={Welcome} options={{
            headerShown: false
        }}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        
    </Stack.Navigator>
)

export default AuthNavigator;