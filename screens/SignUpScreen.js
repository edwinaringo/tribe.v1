import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignUpForm from '../components/signUp/SignUpForm'

const SignUpScreen = ({navigation}) => {
  return (
    <SafeAreaView style= {styles.container}>
    <Text style={styles.loginText}>Hello, </Text>
    <Text style={styles.loginText}>Let's Get Started</Text>

    <SignUpForm navigation={navigation}/>

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

export default SignUpScreen