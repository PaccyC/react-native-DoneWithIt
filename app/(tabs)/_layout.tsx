import { Tabs } from 'expo-router';
import {useEffect, useState} from 'react';
import { Platform ,Keyboard} from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';

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
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {isKeyboardOpen}
        ? {
            display: "none",
          }
        : {
            height: 80,
            elevation: 60,
            shadowOffset: { width: 60, height: 60 }, // Corrected
            shadowColor: "black",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#fff",
            position: "absolute",
            borderColor: "white",
            marginBottom: 0,
            paddingBottom: Platform.OS === "ios" ? 20 : 10,
            paddingTop: 10,
          },
      tabBarShowLabel: false,
    }}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
        <Tabs.Screen
        name="listing-details"
        options={{
          title: 'Details',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
