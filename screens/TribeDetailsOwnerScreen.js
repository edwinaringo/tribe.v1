import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebase'
import {  getFirestore, collection, collectionGroup, getDocs } from 'firebase/firestore'
import Header from '../components/tribeDetailsOwner/Header'
import TribeDescription from '../components/tribeDetailsOwner/TribeDescription'
import TribeProfilePicture from '../components/tribeDetailsOwner/TribeProfilePicture'
import CreateEventButton from '../components/tribeDetailsOwner/CreateEventButton'

const TribeDetailsOwnerScreen = ({route, navigation}) => {

  const db = getFirestore(FIRESTORE_DB)

  const selectedUserTribe = route.params?.userTribes

  console.log('Selected user tribe(tribe owners):', selectedUserTribe);

  return (
    <SafeAreaView>
      <Header navigation={navigation} userTribe={selectedUserTribe} route={route}/>
      <CreateEventButton navigation={navigation} userTribe={selectedUserTribe} route={route}/>
      <TribeDescription navigation={navigation} userTribe={selectedUserTribe} route={route}/>
      {/* <TribeProfilePicture navigation={navigation} userTribe={selectedUserTribe} route={route}/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'FEFEFE',
      flex: 1,
  },
})

export default TribeDetailsOwnerScreen