import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddNewTribe from '../components/newTribe/AddNewTribe'


const CreateTribeScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'black', flex: 1}}>
        <AddNewTribe/>
    </SafeAreaView>

  )
}



export default CreateTribeScreen