import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CreateNewEvent from '../components/newEvent/CreateNewEvent'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreateEventScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CreateNewEvent navigation={navigation} />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
})

export default CreateEventScreen