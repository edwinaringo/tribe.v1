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
import {  getFirestore, doc, getDoc, collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import ExploreScreen from './ExploreScreen'



const HomeScreen = ({ navigation, route }) => {
  const db = getFirestore(FIRESTORE_DB);
  const auth = getAuth(FIREBASE_AUTH);
  const [userTribes, setUserTribes] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    // Get the current authenticated user
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // Fetch user tribes when the user is authenticated
        fetchUserTribes(authUser);

        const userDocRef = doc(db, 'users', authUser.uid);


        getDoc(userDocRef)
          .then((userDoc) => {
            if (userDoc.exists()) {
              const userData = userDoc.data();
              console.log('User data:', userData);
              setUser(userData);

              // fetchUserTribes(authUser);
            } else {
              // User document does not exist
              console.log('User document does not exist');
            }
          })
          .catch((error) => {
            console.error('Error fetching user document:', error);
          });
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const fetchUserTribes = async (authUser) => {
    try {
      const tribesRef = collection(db, 'tribes');

      const q = query(tribesRef, where('owner_uid', '==', authUser.uid));
      const querySnapshot = await getDocs(q);
      const userTribesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUserTribes(userTribesData);
    } catch (error) {
      console.error('Error fetching user tribes:', error);
    }
  }

    
  return (
  <SafeAreaView style = {styles.container}> 
    <ScrollView>
      <Header navigation={navigation} userTribes={userTribes} route={route}/>
      <Stories/>
      <Rated/>
      <ScrollView>
        {POSTS.map((post, index)=>(
              <Post post={post} key={index} navigation={navigation}/>
        ))}
      </ScrollView>
    </ScrollView>

    <BottomTabs icons={bottomTabIcons} user={user}/>

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