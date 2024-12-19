import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '@/components/Screen'
import FormField from '@/components/FormField'
import CustomSubmitButton from '@/components/CustomSubmitButton'
import CustomForm from '@/components/CustomForm'


const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password:Yup.string().required("Password").min(8)
})
const Login = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS  === "ios" ? "padding": "height"}
    style={styles.container}
    >

    <Screen >
         <Image
           source={require("../../../assets/images/logo-red.png")}
           style={styles.logo}
         />

         <CustomForm
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={values=>console.log(values)}
          validationSchema={validationSchema}
         >
          

                <FormField
                name='email'
                icon="email-outline"
                placeholder="Email"
                autoCapitalize= "none"
                keyBoardType = "email-address"
                autoCorrect = {false}
                />

               
                <FormField
                name='password'
                icon="lock"
                placeholder="Password"
                autoCapitalize= "none"
                autoCorrect = {false}
                secureTextEntry={true}
                />

              <CustomSubmitButton title='Login'/>

             
          
          


         </CustomForm>
    </Screen>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
  flex: 1,
  padding: 10
  },

  logo:{
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop:50,
    marginBottom:20,
  }
})