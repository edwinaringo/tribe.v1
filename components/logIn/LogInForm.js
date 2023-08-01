import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

const LogInForm = () => {
  return (
    <View>
        <View style = {styles.inputField}>
            <TextInput 
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
            />
            <TextInput/>
        </View>

        <View style = {styles.inputField}>
            <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                autoFocus={true}
            />
            <TextInput/>
        </View>
        <Button title ='Log in' />
    </View>
  )
}

const styles = StyleSheet.create({

    inputField:{

    }

})

export default LogInForm