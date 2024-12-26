import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../(site)/auth/Register';
import Login from '../(site)/auth/Login';
import Welcome from '../(site)/auth/Welcome';

const Stack = createNativeStackNavigator();

const AuthNavigator=  ()=>(
    <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={Welcome} options={{
            headerShown: false
        }}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        
    </Stack.Navigator>
)

export default AuthNavigator;