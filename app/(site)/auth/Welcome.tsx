import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AppButton from '@/components/AppButton'
import { Colors } from '@/constants/Colors'
const Welcome = ({navigation}:{navigation: any}) => {
  return (
    <ImageBackground
    blurRadius={10}
    style={styles.background}
    source={require("../../../assets/images/background.jpg")}
  >
    <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require("../../../assets/images/logo-red.png")} />
      <Text style={styles.tagline}>Sell What You Don't Need</Text>
    </View>
    <View style={styles.buttonsContainer}>
      <AppButton title="Login" color={Colors.primary} onPress={()=> navigation.navigate("Login")}/>
      <AppButton title="Register" color={Colors.secondary} onPress={()=> navigation.navigate("Register")} />
    </View>
  </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      buttonsContainer: {
        padding: 20,
        width: "100%",
      },
      logo: {
        width: 100,
        height: 100,
      },
      logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
      },
      tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
      },
})