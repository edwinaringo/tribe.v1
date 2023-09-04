import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import CreateTribeScreen from './CreateTribeScreen'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import ProfileScreen from './ProfileScreen'
import EventScreen from './EventScreen'
import ExploreScreen from './ExploreScreen'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}


export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='ExploreScreen' 
            screenOptions={screenOptions}
            >
                <Stack.Screen name = 'HomeScreen' component={HomeScreen} />
                <Stack.Screen name = 'CreateTribeScreen' component={CreateTribeScreen}/>
                <Stack.Screen name = 'ProfileScreen' component={ProfileScreen}/>
                <Stack.Screen name = 'EventScreen' component={EventScreen} />
                <Stack.Screen name = 'ExploreScreen' component= {ExploreScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
 
)

export const SignedOutStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='LoginScreen' 
            screenOptions={screenOptions}
            >
                <Stack.Screen name = 'LoginScreen' component={LoginScreen} />
                <Stack.Screen name = 'SignUpScreen' component={SignUpScreen}/>
    
        </Stack.Navigator>
    </NavigationContainer>
 
)


