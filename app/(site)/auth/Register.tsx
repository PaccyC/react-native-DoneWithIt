import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import Screen from '@/components/Screen';
import { CustomForm, CustomSubmitButton, ErrorMessage, FormField } from '@/components/forms';
import { AddUser } from '@/app/types';
import usersApi from "../../api/users";
import authApi from "../../api/auth";
import useAuth from '@/hooks/useAuth';
import useApi from '@/hooks/useApi';
import { useState } from 'react';
import ActivityIndicator from '@/components/ActivityIndicator';

const validationSchema = Yup.object().shape({
  username: Yup.string().required().min(3).label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required("Password is Required").min(8).label("Password")
});

const Register = () => {
  const [registrationFailed, setRegistrationFailed] = useState(false);
   const {loginUser}= useAuth()
   const registerApi= useApi(usersApi.register)
   const loginApi= useApi(authApi.login)

  const handleSubmit = async ({ name, email, password }: AddUser) => {
    const response = await registerApi.request(name, email, password);
    if (!response.ok) return setRegistrationFailed(true);

    setRegistrationFailed(false);


   const {data:authToken} = await loginApi.request(email,password);
   loginUser(authToken)
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Screen>
        <CustomForm
          initialValues={{
            name: "",
            email: "",
            password: ""
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <>

          <ErrorMessage error="User already exists" visible={registrationFailed}/>
              <FormField
                name="name"
                icon="account"
                placeholder="Name"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={formikProps.handleChange("name")}
                value={formikProps.values.name}
              />

              <FormField
                name="email"
                icon="email-outline"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={formikProps.handleChange("email")}
                value={formikProps.values.email}
              />

              <FormField
                name="password"
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={formikProps.handleChange("password")}
                value={formikProps.values.password}
              />

              <CustomSubmitButton title="Register"/>
            </>
          )}
        </CustomForm>
        <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
      </Screen>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  }
});
