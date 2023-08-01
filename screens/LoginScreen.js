import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LogInForm from '../components/logIn/LogInForm'


const LoginScreen = ({navigation}) => {
  return (
  
    <SafeAreaView style= {styles.container}>
        <Text style={styles.loginText}>Hello, </Text>
        <Text style={styles.loginText}>Welcome Back</Text>
        <LogInForm navigation={navigation}/>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        paddingTop:40,
        paddingHorizontal:12
    },

    loginText: {
        fontSize:30,
        marginLeft:10
    },

    logo:{
        height:100,
        width:100,
        alignItems:'center',
    }
})
export default LoginScreen