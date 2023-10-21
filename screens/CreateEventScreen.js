import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CreateNewEvent from '../components/newEvent/CreateNewEvent'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebase'
import {  getFirestore, collection, collectionGroup, getDocs } from 'firebase/firestore'
import { TRIBES } from '../data/tribes'

const CreateEventScreen = ({navigation, route}) => {

  const db = getFirestore(FIRESTORE_DB)


  const selectedUserTribe = route.params?.userTribes

  console.log('Selected user tribe:', selectedUserTribe);


  return (
    <SafeAreaView style={styles.container}>
        <CreateNewEvent navigation={navigation} userTribes={selectedUserTribe} route={route}/>
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