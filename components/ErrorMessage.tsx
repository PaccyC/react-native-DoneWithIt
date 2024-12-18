import { View, Text,StyleSheet } from 'react-native'
import React from 'react'


interface ErrorMessageProps{
    error?: string;
    visible?: boolean;
}
const ErrorMessage = ({error,visible}:ErrorMessageProps) => {

    if (!visible || !error) return null;
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
    error:{
        fontSize:18,
        fontFamily: "Roboto",
        color: "red"

    },

})