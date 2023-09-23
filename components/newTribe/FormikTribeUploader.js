import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { formik } from 'formik'
import validUrl from 'valid-url'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase'
import { getFirestore, addDoc, serverTimestamp, query, where, limit, collection, getDocs } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { getAuth } from 'firebase/auth'



const PLACEHOLDER_IMG = 'https://react.semantic-ui.com/images/wireframe/image.png'

const uploadTribeSchema = Yup.object().shape({
    // tribeImageUrl: Yup.string().url().required('A URL is required'),
    tribeName: Yup.string().max(200, 'Name Cannot be longer than 200 characters'),
    tribeDescription: Yup.string().max(200, 'Tribe description cannot be longer than 200 characters'),
    tribeLocation: Yup.string(),
    tribePrivacy: Yup.string(),
    tribeMembershipFee: Yup.number().required(),


})

const auth = getAuth(FIREBASE_AUTH);
const db = getFirestore(FIRESTORE_DB)

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
        ) => {
        const user = auth.currentUser;
        if (!user) {
          // Handle user not logged in
          console.log('User is not logged in.');
          return;
        }
    
        const tribeRef = collection(db, 'users', user.email, 'tribes');
        try {
          await addDoc(tribeRef, {
            tribeImageUrl: PLACEHOLDER_IMG,
            tribeName: tribeName,
            tribeDescription: tribeDescription,
            tribeLocation: tribeLocation,
            tribeMembershipFee: tribeMembershipFee,
            tribePrivacy: tribePrivacy,
            tribeInterests: [],
            tribeMembers: [],
            user: currentLoggedInUser.username,
            profile_picture: currentLoggedInUser.profilePicture,
            owner_uid: user.uid,
            owner_email: user.email,
            createdAt: serverTimestamp(),
            likes_by_users: [],
            comments: [],
          });
          navigation.goBack();
        } catch (error) {
          console.error('Error uploading tribe:', error);
        }
      };



  return (
    <Formik
  initialValues={{ tribeName:'', tribeImageUrl:'', tribeDescription:'', tribeLocation:'', tribeMembershipFee:'', tribePrivacy:''}}
        onSubmit={(values) => {
          uploadTribeToFirebase(values.tribeImageUrl, values.tribeName, values.tribeDescription, values.tribeLocation, values.tribeMembershipFee, values.tribePrivacy)
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