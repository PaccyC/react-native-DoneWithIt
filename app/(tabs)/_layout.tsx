
import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

import AuthNavigator from '../navigation/AuthNavigator';
import AppNavigator from '../navigation/AppNavigator';
import OfflineNotice from '@/components/OfflineNotice';
import { useAuthContext } from '@/hooks/useAuthContext';
import authStorage from '../(site)/auth/storage';
import { jwtDecode } from 'jwt-decode';
import { SplashScreen } from 'expo-router';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isReady,setIsReady]= useState(false);

  const {user,setUser} = useAuthContext();
  

  const restoreToken= async ()=>{
    const token= await authStorage.getToken();
    if(!token) return
    setUser(jwtDecode(token))
  }

  useEffect(()=>{

    const initializeApp = async() =>{
      await restoreToken();
      setIsReady(true)
    }

    initializeApp();
  },[])

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

useEffect(()=>{
    if(isReady) SplashScreen.hideAsync()
 },[])
if(!isReady) return null
  
  

  return (

    <>
    
  
      <OfflineNotice/>

      {user === null ?   <AuthNavigator/>:<AppNavigator/>  }
    </>
  

  );
}
