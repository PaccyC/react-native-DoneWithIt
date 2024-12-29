import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../(site)/auth/Register';
import Login from '../(site)/auth/Login';
import Welcome from '../(site)/auth/Welcome';
import navigationTheme from './navigationTheme';
import routes from './routes';

const Stack = createNativeStackNavigator();

const AuthNavigator=  ()=>(
    <Stack.Navigator 
    initialRouteName={routes.WELCOME}
    screenOptions={{
        headerTintColor: navigationTheme.colors.primary,
        headerShown: false
        
    }}
    >
        <Stack.Screen name={routes.WELCOME} component={Welcome} options={{
            headerShown: false
        }}/>
        <Stack.Screen name={routes.LOGIN} component={Login}/>
        <Stack.Screen name={routes.REGISTER} component={Register}/>
        
    </Stack.Navigator>
)

export default AuthNavigator;