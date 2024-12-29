import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { jwtDecode } from 'jwt-decode';

import Screen from '@/components/Screen';
import { ErrorMessage, FormField } from '@/components/forms';
import authApi from "../../api/auth";
import { CustomSubmitButton } from '@/components/forms';
import { CustomForm } from '@/components/forms';
import { useAuthContext } from '@/hooks/useAuthContext';
import { User } from '@/app/types';
import authStorage from "../auth/storage"
import useAuth from '@/hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required("Password")
});

const Login = () => {
  const [loginFailed, setLoginFailed] = useState(false);
   const {loginUser}= useAuth()
  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    const response = await authApi.login(email, password);

    if (!response.ok) return setLoginFailed(true);
    setLoginFailed(false);

    if (typeof response.data !== "string") {
      console.error("Invalid token received");
      return;
    }

    // Login User
    
    loginUser(response.data)
    
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Screen>
        <Image
          source={require("../../../assets/images/logo-red.png")}
          style={styles.logo}
        />

        <CustomForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {(formikProps) => (
            <>
              <ErrorMessage error="Invalid email and/or password" visible={loginFailed} />
              <FormField
                name="email"
                icon="email-outline"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
              />

              <FormField
                name="password"
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={formikProps.handleChange('password')}
                value={formikProps.values.password}
              />

              <CustomSubmitButton title="Login" />
            </>
          )}
        </CustomForm>
      </Screen>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
