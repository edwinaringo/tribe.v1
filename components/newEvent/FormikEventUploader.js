import { View, Text, Image, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import validUrl from 'valid-url'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase'
import { getFirestore, addDoc, serverTimestamp, query, where, limit, collection, getDocs, doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'




const PLACEHOLDER_IMG = 'https://react.semantic-ui.com/images/wireframe/image.png'

const auth = getAuth(FIREBASE_AUTH);

const uploadEventSchema = Yup.object().shape({
  // eventImageUrl: Yup.string().url().required('A URL is required'),
  eventName: Yup.string().max(200, 'Name Cannot be longer than 200 characters').required(),
  eventDescription: Yup.string().max(200, 'Tribe description cannot be longer than 200 characters').required(),
  eventLocation: Yup.string().required(),
  eventDate: Yup.string().required(),
  eventRate: Yup.number().required(),


})

const db = getFirestore(FIRESTORE_DB)

const getRandomEventPicture = async() => {
  const response = await fetch('https://randomuser.me/api')
  const data = await response.json()
  return data.results[0].picture.large
}

const FormikEventUploader = ({navigation, route, userTribe}) => {


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
    const selectedTribe = userTribe;
    if (!selectedTribe) {
      // Handle user not logged in
      console.log('Tribe does not exist.');
      return;
  }

  const eventRef = collection(db, 'events')


  try {

      // Use the event name as the document ID
      const eventDocRef = doc(eventRef, eventName);

      const tribeRef = doc(db, 'tribes', selectedTribe.tribeName);
  
    const event = {
      eventImageUrl: await getRandomEventPicture(),
      eventName: eventName,
      eventDate: eventDate,
      eventDescription: eventDescription,
      eventLocation: eventLocation,
      eventRate: eventRate,
      usersGoing: [],
      tribe_name: selectedTribe.tribeName,
      createdAt: serverTimestamp(),
      going: [],
      comments: [],
    };
    await setDoc(eventDocRef, event)
    await updateDoc(tribeRef, {
        events: arrayUnion(eventDocRef.id)
      })
      navigation.goBack();
    } catch (error) {                                                                                                                 
      console.error('Error uploading event:', error);
    }
};

  return (
    <Formik
    initialValues={{ eventName:'', eventImageUrl:'', eventDate:'', eventDescription:'', eventLocation:'', eventRate:''}}
          onSubmit={(values) => {
            uploadEventToFirebase(
  
              values.eventImageUrl, 
              values.eventName, 
              values.eventDate,
              values.eventDescription, 
              values.eventLocation, 
              values.eventRate, 
            )
          }}
          validationSchema={uploadEventSchema}
          validateOnMount={true}
      >
          {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>
              <>
                  <View style={{
                      margin:20, 
                      justifyContent:'space-between', 
                      }}
                  >
                      {/* <Image source={{ uri:PLACEHOLDER_IMG }}
                      style={{ width:100, height:100 }}
                      /> */}
                      {/* <TextInput 
                      style={{color: 'white', fontSize: 16}}
                      placeholder ='Enter Tribe Email'
                      placeholderTextColor='gray'
                      keyboardType='email-address'
                      textContentType='emailAddress'
                      onChangeText={handleChange('tribeEmail')}
                      onBlur={handleBlur('tribeEmail')}
                      value={values.tribeEmail}
                      />
  
                      <TextInput 
                      style={{color: 'white', fontSize: 16}}
                      placeholder ='Enter Tribe Password'
                      placeholderTextColor='gray'
                      autoCapitalize='none'
                      autoCorrect={false}
                      secureTextEntry={true}
                      textContentType='password'
                      onChangeText={handleChange('tribePassword')}
                      onBlur={handleBlur('tribePassword')}
                      value={values.tribePassword}
                      /> */}
  
                      <TextInput 
                      style={{fontSize: 16}}
                      placeholder ='Enter Event Name'
                      placeholderTextColor='gray'
                      onChangeText={handleChange('eventName')}
                      onBlur={handleBlur('eventName')}
                      value={values.eventName}
                      />
  
                      {/* {errors.tribeName && (
                          <Text style= {{fontSize:10, color:'red'}}>
                              {errors.tribeName}
                          </Text>
                      )} */}
  
                      {/* <TextInput placeholder ='Enter Image Url' 
                      placeholderTextColor='gray'
                      onChangeText={handleChange('tribeImageUrl')}
                      onBlur={handleBlur('tribeImageUrl')}
                      value={values.tribeImageUrl}
                      /> */}

                      <TextInput 
                      style={{fontSize: 16}}
                      placeholder ='Enter Event date...' 
                      placeholderTextColor='gray'
                      multiline={true}
                      onChangeText={handleChange('eventDate')}
                      onBlur={handleBlur('eventDate')}
                      value={values.eventDate}
                      />


  
                      <TextInput 
                      style={{fontSize: 16}}
                      placeholder ='Enter Event description...' 
                      placeholderTextColor='gray'
                      multiline={true}
                      onChangeText={handleChange('eventDescription')}
                      onBlur={handleBlur('eventDescription')}
                      value={values.eventDescription}
                      />
  
                      <TextInput 
                      style={{fontSize: 16}}
                      placeholder ='Enter Event location' 
                      placeholderTextColor='gray'
                      onChangeText={handleChange('eventLocation')}
                      onBlur={handleBlur('eventLocation')}
                      value={values.eventLocation}
                      />
  
                      <TextInput 
                      style={{fontSize: 16}}
                      placeholder ='Enter Event Rate' 
                      placeholderTextColor='gray'
                      onChangeText={handleChange('eventRate')}
                      onBlur={handleBlur('eventRate')}
                      value={values.eventRate}
                      />
                  </View>
  
                  <Button style={{length:10}} onPress={handleSubmit} title ='Create your event' disabled={!isValid}> </Button>
  
              </>
  
  
          }
  
      </Formik>
  )
}


export default FormikEventUploader