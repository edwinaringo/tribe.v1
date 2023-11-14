import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React,{ useEffect, useState } from 'react'
import Header from '../components/tribeOwners/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateEventButton from '../components/tribeDetailsOwner/CreateEventButton'
import TribePosts from '../components/tribeOwners/TribePosts'
import AllTribes from '../components/tribeOwners/AllTribes'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../firebase'
import {  getFirestore, doc, getDoc, collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 

const TribeOwnersHomeScreen = ({navigation, route}) => {

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

        const userDocRef = doc(db, 'users', authUser.email);


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

      console.log("These are the users tribes: ", userTribesData)

      setUserTribes(userTribesData);
    } catch (error) {
      console.error('Error fetching user tribes:', error);
    }
  }


  console.log("Your tribes are: ", userTribes)

  return (
    <SafeAreaView style={styles.container}>
      <Header user= {user} route={route}/>
      <Text>Here are your tribes</Text>
                {userTribes && userTribes.length === 0 ? (
                <Text>No tribes found.</Text>
                ) : (
                  userTribes.map((userTribes, index) => (
                    <AllTribes userTribes={userTribes} key={index} navigation={navigation} user={user} />
                  ))
                )}
            {/* <TribePosts navigation={navigation}/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE'
    },

    container2: {
      marginTop:15,
      marginBottom:5,
  },

  item: {
      height: 100,
      width:"100%",
      marginRight:15,
      marginLeft:15,
      flex:1,
      flexDirection:'row',
  },

  post: {
      width:120,
      height: 100,
      borderBottomLeftRadius:5,
      borderTopLeftRadius:5,
    },

  tribeDetails: {
      width:265,
      height: 100,
      borderRadius:0,
      backgroundColor:"#FFFFFF",
      borderBottomRightRadius:5,
      borderTopRightRadius:5,   
  },
})



export default TribeOwnersHomeScreen