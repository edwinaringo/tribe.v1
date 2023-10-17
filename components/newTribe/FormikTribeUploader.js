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
const db = getFirestore(FIRESTORE_DB)

const uploadTribeSchema = Yup.object().shape({
    // tribeImageUrl: Yup.string().url().required('A URL is required'),

    tribeName: Yup.string().max(200, 'Name Cannot be longer than 200 characters'),
    tribeDescription: Yup.string().max(200, 'Tribe description cannot be longer than 200 characters'),
    tribeLocation: Yup.string(),
    tribePrivacy: Yup.string(),
    tribeMembershipFee: Yup.number().required(),


})

const getRandomProfilePicture = async() => {
  const response = await fetch('https://randomuser.me/api')
  const data = await response.json()
  return data.results[0].picture.large
}



const FormikTribeUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null)
    // const navigation = useNavigation()

 
    useEffect(() => { 
        const getUsername = async () => {
          const user = auth.currentUser;
          if (user) {
            const userRef = collection(db, 'users');
            const q = query(userRef, where('owner_uid', '==', user.uid), limit(1));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              setCurrentLoggedInUser({
                username: doc.data().username,
                profilePicture: doc.data().profile_picture,
              });
            });
          } else {
            // Handle user not logged in
            console.log('User is not logged in.');
          }
        };
        getUsername();
      }, []);



  const uploadTribeToFirebase = async (
        tribeImageUrl,
        tribeName, 
        tribeDescription, 
        tribeLocation, 
        tribeMembershipFee,
        tribePrivacy, 
        tribeUid,
      ) => {
        const user = auth.currentUser;
        if (!user) {
          // Handle user not logged in
          console.log('User is not logged in.');
          return;
     }
      
     const tribesRef = collection(db, 'tribes');

     try {
        // Use the tribeName as the document ID
        const tribeDocRef = doc(tribesRef, tribeName);
        
    
        const userRef = doc(db, 'users', user.email);
    
        // Now set the data for the tribe and the user
        const tribe = {
          tribeImageUrl: await getRandomProfilePicture(),
          tribeName: tribeName,
          tribeDescription: tribeDescription,
          tribeLocation: tribeLocation,
          tribeMembershipFee: tribeMembershipFee,
          tribePrivacy: tribePrivacy,
          tribeInterests: [],
          tribeMembers: [],
          profile_picture: currentLoggedInUser.profilePicture,
          user:currentLoggedInUser.username,
          owner_uid: user.uid,
          owner_email: user.email,
          createdAt: serverTimestamp(),
          likes_by_users: [],
          comments: [],
        };

        await setDoc(tribeDocRef, tribe)
        await updateDoc(userRef, {
            tribes: arrayUnion(tribeDocRef.id)
          })
          navigation.goBack();
        } catch (error) {                                                                                                                 
          console.error('Error uploading tribe:', error);
        }
      };

  //     const userRef = doc(db, 'users', user.email)
  //     await updateDoc(userRef, {
  //       tribes: arrayUnion(tribeDocRef.id)
  //     })
  //     navigation.goBack();
  //   } catch (error) {                                                                                                                 
  //     console.error('Error uploading tribe:', error);
  //   }
  // };


    //   try {
    //     // Use the tribeName as the document ID
    //     const tribeDocRef = doc(tribesRef, tribeName);
        
    
    //     const userRef = doc(db, 'users', user.uid);
    
    //     // Now set the data for the tribe and the user
    //     const tribe = {
    //       tribeImageUrl: await getRandomProfilePicture(),
    //       tribeName: tribeName,
    //       tribeDescription: tribeDescription,
    //       tribeLocation: tribeLocation,
    //       tribeMembershipFee: tribeMembershipFee,
    //       tribePrivacy: tribePrivacy,
    //       tribeInterests: [],
    //       tribeMembers: [],
    //       user: currentLoggedInUser.username,
    //       profile_picture: currentLoggedInUser.profilePicture,
    //       owner_uid: user.uid,
    //       owner_email: user.email,
    //       createdAt: serverTimestamp(),
    //       likes_by_users: [],
    //       comments: [],
    //     };

    
    //     const dataForUser = {
    //       tribes: arrayUnion(tribeName), // Update the user's tribes with the tribeName
    //     };



        
    
    //     // Use a batch to update both the tribe and user atomically
    //     const batch = db.batch();
    //     batch.set(tribeDocRef, dataForTribe);
    //     batch.update(userRef, dataForUser);
    //     await batch.commit();
    
    //     navigation.goBack();
    //   } catch (error) {
    //     console.error('Error uploading tribe:', error);
    //   }
    // };
      
  return (
    <Formik
  initialValues={{ tribeName:'', tribeImageUrl:'', tribeDescription:'', tribeLocation:'', tribeMembershipFee:'', tribePrivacy:'', tribeMembers:0}}
        onSubmit={(values) => {
          uploadTribeToFirebase(

            values.tribeImageUrl, 
            values.tribeName, 
            values.tribeDescription, 
            values.tribeLocation, 
            values.tribeMembershipFee, 
            values.tribePrivacy, 
            values.tribeMembers)
        }}
        validationSchema={uploadTribeSchema}
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
                    style={{color: 'white', fontSize: 16}}
                    placeholder ='Enter Tribe Name'
                    placeholderTextColor='gray'
                    onChangeText={handleChange('tribeName')}
                    onBlur={handleBlur('tribeName')}
                    value={values.tribeName}
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
                    style={{color: 'white', fontSize: 16}}
                    placeholder ='Enter Tribe description...' 
                    placeholderTextColor='gray'
                    multiline={true}
                    onChangeText={handleChange('tribeDescription')}
                    onBlur={handleBlur('tribeDescription')}
                    value={values.tribeDescription}
                    />

                    <TextInput 
                    style={{color: 'white', fontSize: 16}}
                    placeholder ='Enter Tribe location' 
                    placeholderTextColor='gray'
                    onChangeText={handleChange('tribeLocation')}
                    onBlur={handleBlur('tribeLocation')}
                    value={values.tribeLocation}
                    />

                    <TextInput 
                    style={{color: 'white', fontSize: 16}}
                    placeholder ='Enter Tribe membership fee' 
                    placeholderTextColor='gray'
                    onChangeText={handleChange('tribeMembershipFee')}
                    onBlur={handleBlur('tribeMembershipFee')}
                    value={values.tribeMembershipFee}
                    />

                    <TextInput 
                    style={{color: 'white', fontSize: 16}}
                    placeholder ='Enter Tribe privacy' 
                    placeholderTextColor='gray'
                    onChangeText={handleChange('tribePrivacy')}
                    onBlur={handleBlur('tribePrivacy')}
                    value={values.tribePrivacy}
                    />
                </View>

                <Button style={{length:10}} onPress={handleSubmit} title ='Create your tribe' disabled={!isValid}> </Button>

            </>


        }

    </Formik>
  )
}

export default FormikTribeUploader