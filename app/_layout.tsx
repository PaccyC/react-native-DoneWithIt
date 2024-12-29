import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';


import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthContextProvider from './context/authContext';
import { jwtDecode } from 'jwt-decode';
import authStorage from './(site)/auth/storage';
import { useAuthContext } from '@/hooks/useAuthContext';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });



  useEffect(() => {
    if (loaded ) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded ) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthContextProvider>

     
      <GestureHandlerRootView>

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
function setUser(arg0: any) {
  throw new Error('Function not implemented.');
}

