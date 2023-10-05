import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Rated from '../components/home/Rated'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import EventScreen from './EventScreen'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../components/home/BottomTabs'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebase'
import {  getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'; 
import ExploreScreen from './ExploreScreen'



const HomeScreen = ({navigation}) => {

  const db = getFirestore(FIRESTORE_DB)
  const auth = getAuth(FIREBASE_AUTH); 
  const [tribes, setTribes] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            setUsername(userData.username || ''); // Set the username
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData()
  }, [auth, db])

    // const fetchTribes = async () => {
    //   try {
    //     const usersSnapshot = await getDocs(collection(db, 'users'))

    //     usersSnapshot.forEach(async userDoc => {
    //       const tribesSnapshot = await getDocs(collection(db, `users/${userDoc.id}/tribes`))
    //       // console.log(`Tribes for user ${userDoc.id}:`, tribesSnapshot.docs.map(doc => doc.data()))
    //     });
    //   } catch (error) {
    //     console.log('Error fetching Tribes:', error)
    //   }
    // }

    // fetchTribes()

    
  return (
  <SafeAreaView style = {styles.container}> 
    <ScrollView>
      <Header navigation={navigation}/>
      <Stories/>
      <Rated/>
      <ScrollView>
        {POSTS.map((post, index)=>(
              <Post post={post} key={index} navigation={navigation}/>
        ))}
      </ScrollView>
    </ScrollView>

    <BottomTabs icons={bottomTabIcons} tribes={tribes} username={username}/>

  </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'FEFEFE',
        flex: 1,
    },
    postContainer: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        fontFamily: 'MyCustomFont'

        
    }
})

export default HomeScreen