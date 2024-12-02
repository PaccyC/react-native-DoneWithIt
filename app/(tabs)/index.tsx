import { Image, StyleSheet, View, ImageBackground, Text} from 'react-native';

export default function HomeScreen() {
  const handlePress= ()=> console.log("Text pressed");
  
  return (
 
     <ImageBackground
     style={styles.background}
     source={require("../../assets/images/background.jpg")}
     >

     <View style={styles.logoContainer}>
      <Image 
      style={styles.logo}
      source={require("../../assets/images/logo-red.png")}/>

      <Text >Sell What You Don't Need</Text>

     </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>

     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"

  },
  loginButton:{
    width: "100%",
    height:70,
    backgroundColor:"#fc5c65"

  },
  registerButton:{
    width: "100%",
    height:70,
    backgroundColor:"#4ecdc4"

  },
  logo:{
    height:100,
    width:100,
  },
  logoContainer:{
    position: "absolute",
    top: 70,
    alignItems: "center"

  }
})