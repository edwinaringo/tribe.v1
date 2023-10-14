import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

const TRIBE_LOGO = 'https://cdn0.iconfinder.com/data/icons/business-office-1-7/55/13-64.png'


export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
         <Image 
                style={styles.logo} 
                source={require('../assets/finalfinal.png')}
        />

         <Pressable titleSize={20} style={styles.button2} onPress={() => navigation.push('LoginScreen')}>
                <Text style={{fontSize: 20, fontFamily: 'Font'}}>Log in</Text>
         </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c43d1c'
    },

    logo: {
        width:350,
        height: 350,
        alignSelf:'center',
        margin: 100

    },

    button2: {
        marginTop:100, 
        minHeight:44,
        borderRadius:5,
        borderColor:'white', 
        borderWidth:1.5,
        justifyContent:'center',
        alignItems:'center',
        width:250,
        alignSelf:'center'

    },
})