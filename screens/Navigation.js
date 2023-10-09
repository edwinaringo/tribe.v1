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
import ExploreTribesScreen from './ExploreTribesScreen'
import EventDetails from '../components/event/EventDetails'
import TribeDetailsScreen from './TribeDetailsScreen'
import TribeOwnersHomeScreen from './TribeOwnersHomeScreen'
import CreateEventScreen from './CreateEventScreen'
import TribeLogInScreen from './TribeLogInScreen'


const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}


export const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName= 'HomeScreen' 
            screenOptions={screenOptions}
            >
                <Stack.Screen name = 'HomeScreen' component={HomeScreen} />
                <Stack.Screen name = 'CreateTribeScreen' component={CreateTribeScreen}/>
                <Stack.Screen name = 'ProfileScreen' component={ProfileScreen}/>
                <Stack.Screen name = 'EventScreen' component={EventScreen} />
                <Stack.Screen name = 'ExploreScreen' component= {ExploreScreen}/>
                <Stack.Screen name = 'ExploreTribesScreen' component={ExploreTribesScreen}/>
                <Stack.Screen name = 'EventDetails' component={EventDetails}/>
                <Stack.Screen name = 'TribeDetailsScreen' component={TribeDetailsScreen} />
                <Stack.Screen name = 'TribeOwnersHomeScreen' component={TribeOwnersHomeScreen} />
                <Stack.Screen name = 'CreateEventScreen' component={CreateEventScreen} />
                <Stack.Screen name = 'TribeLogInScreen' component={TribeLogInScreen} />

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


