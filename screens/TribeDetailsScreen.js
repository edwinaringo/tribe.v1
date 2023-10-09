import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { TRIBES } from '../data/tribes'
import { SafeAreaView } from 'react-native-safe-area-context'
import TribeProfilePicture from '../components/tribeDetails/TribeProfilePicture'
import Header from '../components/tribeDetails/Header'
import TribeFollowers from '../components/tribeDetails/TribeFollowers'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebase'
import {  getFirestore, collection, collectionGroup, getDocs } from 'firebase/firestore'
import TribeDescription from '../components/tribeDetails/TribeDescription'


const TribeDetailsScreen = ({navigation, route}) => {

  const db = getFirestore(FIRESTORE_DB)


  const selectedTribe = route.params?.tribe || TRIBES[0];
  
  console.log('Selected Tribe:', selectedTribe);

  // useEffect(()=> {
  //   collectionGroup(db, 'tribes')
  //   .orderBy('createdAt', 'desc')
  //   .onSnapshot(snapshot=>{

  //   }.docs.map(tribe => ({id: tribe.id, ...tribe.data})))
  // })


  return (
    <SafeAreaView style = {styles.container}>

      <Header tribe={selectedTribe} route={route}/>
      <ScrollView>
        <TribeProfilePicture tribe={selectedTribe} navigation={navigation} route={route}/>
        <TribeFollowers tribe={selectedTribe} navigation={navigation} route={route}/>
        <TribeDescription tribe={selectedTribe} navigation={navigation} route={route} />
      </ScrollView>
      

    </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'FEFEFE',
      flex: 1,
  },
})

export default TribeDetailsScreen