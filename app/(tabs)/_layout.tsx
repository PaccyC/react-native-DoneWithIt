
import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';

import AuthNavigator from '../navigation/AuthNavigator';
import AppNavigator from '../navigation/AppNavigator';
import OfflineNotice from '@/components/OfflineNotice';
import AuthContextProvider from '../context/authContext';
import { useAuthContext } from '@/hooks/useAuthContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const {user} = useAuthContext();

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
    <AuthContextProvider >
      <OfflineNotice/>

      {!user ? <AuthNavigator/>: <AppNavigator/> }

    </AuthContextProvider>
  

  );
}
