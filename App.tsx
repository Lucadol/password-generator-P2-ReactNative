import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//Form validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required('Required')
    .min(4, 'Too short')
    .max(16, 'Too long')
})

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})