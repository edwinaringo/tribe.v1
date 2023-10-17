import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/profile/Header';
import ProfilePicture from '../components/profile/ProfilePicture';
import Followers from '../components/profile/Followers';
import TicketsTribes from '../components/profile/TicketsTribes';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import { USERS } from '../data/users'; 
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebase'
import {  getFirestore, collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 

const ProfileScreen = ({ route, navigation, user }) => {

  // const [authenticatedUser, setUser] = useState('');
  const db = getFirestore(FIRESTORE_DB)


  // const authenticatedUser = route.params?.user ;



  // Get the user data from the route params
  // useEffect(() => {
  //   // Use onAuthStateChanged to detect changes in authentication state
  //   const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
  //     if (authenticatedUser) {
  //       // User is authenticated, fetch their data
  //       const userId = authenticatedUser.uid;
  //       try {
  //         const collectionRef = collection(db, 'users');
  //         const userQuery = query(
  //           collectionRef,
  //           where('uid', '==', userId), // Assuming there's a 'uid' field in your user documents
  //           orderBy('createdAt', 'desc')
  //         );

  //         const querySnapshot = await getDocs(userQuery);
  //         const userData = querySnapshot.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }));
  //         console.log('user data: ', userData)
  //         setUser(userData[0]); // Assuming there's only one document per user
  //       } catch (error) {
  //         console.error('Error fetching user data:', error);
  //       }
  //     } else {
  //       // User is not authenticated, handle this case if needed
  //     }
  //   });

  //   // Clean up the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <ProfilePicture user={user} navigation={navigation} route={route} />
        <Followers navigation={navigation} route={route} user={user}/>
        <TicketsTribes navigation={navigation} route={route} user={user} />
      </ScrollView>
      {/* <BottomTabs user={user} route={route} icons={bottomTabIcons} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FEFEFE',
  },
});

export default ProfileScreen;
