import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TribeLoginForm from '../components/tribeLogIn/TribeLogInForm'
import { SafeAreaView } from 'react-native-safe-area-context'

const TribeLogInScreen = ({navigation}) => {
  return (
    <SafeAreaView style= {styles.container}>
    <Text style={styles.loginText}>Hello, </Text>
    <Text style={styles.loginText}>Welcome Back</Text>
    <TribeLoginForm navigation={navigation}/>
</SafeAreaView>
)
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE',
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
    },

})

export default TribeLogInScreen

