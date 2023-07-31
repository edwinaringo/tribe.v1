import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateNewTribe from '../components/newTribe/CreateNewTribe'

const CreateTribeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CreateNewTribe navigation={navigation} />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default CreateTribeScreen