import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'
import Screen from '@/components/Screen'

import { CustomForm, CustomSubmitButton, FormField } from '@/components/forms'

const validationSchema= Yup.object().shape({
    name: Yup.string().required("Name is Required").min(3).label("Name"),
    email: Yup.string().email().required().label("Email"),
    password:Yup.string().required("Password is Required").min(8).label("Password")
})
const Register = () => {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS  === "ios" ? "padding": "height"}
    style={styles.container}
    >
        <Screen>

            <CustomForm
             initialValues={{
                name: "",
                email:"",
                password: ""
             }}
             validationSchema={validationSchema}
             onSubmit={(values)=>console.log(values)
             }
            >
                <FormField
                name='name'
                icon="account"
                placeholder="Name"
                autoCapitalize= "none"
                autoCorrect = {false}
                />

                <FormField
                name='email'
                icon="email-outline"
                placeholder="Email"
                autoCapitalize= "none"
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

                <CustomSubmitButton title='Register'/>


 


            </CustomForm>
        </Screen>
    

    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 10
    }
})