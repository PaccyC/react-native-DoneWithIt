import {StyleSheet} from 'react-native';


import { Colors } from '@/constants/Colors';

import Login from '../(site)/auth/Login';
import Register from '../(site)/auth/Register';


export default function HomeScreen() {
  return (
 
     <Register/>
  );
}

const styles = StyleSheet.create({

  cardContainer:{
     backgroundColor: Colors.white,
      padding: 20,
      paddingTop: 100
    
  },
  background:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"

  },
  logo:{
    height:100,
    width:100,
  },
  logoContainer:{
    position: "absolute",
    top: 70,
    alignItems: "center"

  },
  buttonsContainer:{
    width: "100%",
    padding: 15,
    flexDirection: "column",
    gap: 10
  },
  tagline:{
    fontSize: 25,
    fontWeight :"600",
    paddingVertical: 20,
  },

  screen:{
    padding:20,
    backgroundColor: Colors.light_gray
  }

})