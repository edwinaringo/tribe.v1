import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/tribeOwners/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateEventButton from '../components/tribeOwners/CreateEventButton'
import TribePosts from '../components/tribeOwners/TribePosts'

const TribeOwnersHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <Header />
            <CreateEventButton navigation={navigation}/>
            <TribePosts navigation={navigation}/>
        </ScrollView>     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE'
    }
})



export default TribeOwnersHomeScreen