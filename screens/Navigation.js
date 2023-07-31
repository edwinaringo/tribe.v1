import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import CreateTribeScreen from './CreateTribeScreen'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}


const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='HomeScreen' 
        screenOptions={screenOptions}
        >
            <Stack.Screen name = 'HomeScreen' component={HomeScreen} />
            <Stack.Screen name = 'CreateTribeScreen' component={CreateTribeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
 
)

export default SignedInStack