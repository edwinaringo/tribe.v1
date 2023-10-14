import { View, Text, Image, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import validUrl from 'valid-url'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase'
import { getFirestore, addDoc, serverTimestamp, query, where, limit, collection, getDocs, doc, setDoc } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


const uploadEventSchema = Yup.object().shape({
  // eventImageUrl: Yup.string().url().required('A URL is required'),
  eventName: Yup.string().max(200, 'Name Cannot be longer than 200 characters').required(),
  eventDescription: Yup.string().max(200, 'Tribe description cannot be longer than 200 characters').required(),
  eventLocation: Yup.string().required(),
  eventDate: Yup.string().required(),
  eventRate: Yup.number().required(),


})

const db = getFirestore(FIRESTORE_DB)


const FormikEventUploader = ({navigation}) => {

  const [currentTribe, setCurrentTribe] = useState(null)


  useEffect(() => {
    

  }, [])

  const uploadEventToFirebase = async (
    eventImageUrl,
    eventName,
    eventDate,
    eventDescription,
    eventLocation,
    eventRate, 
  ) => {
    const user = auth.currentUser;
    if (!user) {
      // Handle user not logged in
      console.log('User is not logged in.');
      return;
  }

  const eventRef = collection(db, 'tribes', 'events')
  try {
    await addDoc(eventRef, {
      eventImageUrl: PLACEHOLDER_IMG,
      eventName: tribeName,
      eventDescription: tribeDescription,
      eventLocation: tribeLocation,
      eventRate: eventRate,
      usersGoing: [],
      user: currentLoggedInUser.username,
      profile_picture: currentLoggedInUser.profilePicture,
      owner_uid: user.uid,
      owner_email: user.email,
      tribe_uid: tribe.id,
      createdAt: serverTimestamp(),
      likes_by_users: [],
      comments: [],
    });
    navigation.goBack();
  } catch (error) {
    console.error('Error uploading event:', error);
  }
};




  return (
    <View>
      <Text>FormikEventUploader</Text>
    </View>
  )
}


export default FormikEventUploader