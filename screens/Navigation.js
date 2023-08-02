import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import CreateTribeScreen from './CreateTribeScreen'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import ProfileScreen from './ProfileScreen'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}


const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='ProfileScreen' 
            screenOptions={screenOptions}
            >
                <Stack.Screen name = 'LoginScreen' component={LoginScreen} />
                <Stack.Screen name = 'HomeScreen' component={HomeScreen} />
                <Stack.Screen name = 'CreateTribeScreen' component={CreateTribeScreen}/>
                <Stack.Screen name = 'SignUpScreen' component={SignUpScreen}/>
                <Stack.Screen name = 'ProfileScreen' component={ProfileScreen}/>


        </Stack.Navigator>
    </NavigationContainer>
 
)

export default SignedInStack