import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, ScrollView, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, collection, setDoc, addDoc, doc } from 'firebase/firestore'



const SignUpForm = ({navigation}) => {

    const auth = getAuth(FIREBASE_AUTH);
    const db = getFirestore(FIRESTORE_DB)

  const SignupFormSchema = Yup.object().shape({
    username: Yup.string().required().min(2, 'A user name cannot be less than 2 characters'),
    email:Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password cannot be less than 6 characters'),
    age: Yup.number().required().min(13, 'You have to be 13 and above to use this application'),
    phoneNumber: Yup.number(),
    gender: Yup.string()
  })

  const getRandomProfilePicture = async() => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }

  const onSignup = async (email, password, username) => {
    try {
      const authUser = await createUserWithEmailAndPassword(auth, email, password, username)
      console.log("Firebase sign up is successful", email, username, password)


      const usersCollection=collection(db, 'users')

      const userDocRef = doc(usersCollection, email) // Use email as the document ID


      const user = {
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      }

      await setDoc(userDocRef, user)
      console.log("firestore addition successfull", email, username)
    } catch (error) {
     console.log('Firestore Adding failed')
     Alert.alert('User name or password is invalid', error.message)
        // [
        //     {
        //         text: 'OK',
        //         onPress: () => console.log('OK'),
        //         style:'cancel',
        //     },
        //     {text:'Log In', onPress: () => navigation.push('LoginScreen')}
        // ]
    
    
    }    
  }

  return (
    
    <ScrollView style = {styles.wrapper}>

    <Formik
        initialValues={{username: '', email:'', password: '', age: '', phoneNumber: '', gender: ''}}
        onSubmit={values =>{
            onSignup(values.email, values.password, values.username)
        }}
        validationSchema={SignupFormSchema}
        validationOnMount={true}
        >

        {({handleChange, handleBlur, handleSubmit, values, isValid})=>(

        <>

        <View style = {[
            styles.inputField,
            {
                borderColor:
                values.email.length <1 || Validator.validate(values.email)
                ? '#ccc'
                :'red',

            },
             ]}
        >
            <TextInput
                placeholderTextColor='#676767'
                placeholder='Enter your email address'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
        </View>

        <View style = {[
            styles.inputField, 
            {
                borderColor: 
                1 > values.username.length || values.username.length >= 2
                 ? '#ccc' 
                 : 'red',
                },
            ]}
        >
            <TextInput 
                placeholderTextColor='#676767'
                placeholder='Enter a username'
                autoCapitalize='none'
                // keyboardType='default'
                textContentType='username'
                autoFocus={true}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
            />
        </View>

        <View style = {[
            styles.inputField,
            {
                borderColor:
                1 > values.password.length || values.password.length >= 6
                ? '#ccc'
                :'red',

            },
             ]}
        >
            <TextInput
                placeholderTextColor='#676767'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
        </View>
        
        <View style = {[
            styles.inputField,
            {
                // borderColor:
                // 1 > values.age.number || values.age.number >= 13
                // ? '#ccc'
                // :'red',

            },
             ]}
        >
            <TextInput
                placeholderTextColor='#676767'
                placeholder='Age'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='numeric'
                // textContentType='number'
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
            />
        </View>
        
        {/* <View style = {[
            styles.inputField,
            {
                // borderColor:
                // 1 > values.password.length || values.password.length >= 6
                // ? '#ccc'
                // :'red',

            },
             ]}
        >
            <TextInput
                placeholderTextColor='#676767'
                placeholder='Gender'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={handleChange('gender')}
                onBlur={handleBlur('gender')}
                value={values.gender}
            />
        </View> */}
        
        {/* <View style = {[
            styles.inputField,
            {
                // borderColor:
                // 1 > values.password.length || values.password.length >= 6
                // ? '#ccc'
                // :'red',

            },
             ]}
        >
            <TextInput
                placeholderTextColor='#676767'
                placeholder='Phone Number'
                autoCapitalize='none'
                autoCorrect={false}
                // textContentType='password'
                onChangeText={handleChange('phoneNumber')}
                onBlur={handleBlur('phoneNumber')}
                value={values.phoneNumber}
            />
        </View> */}
        
        {/* <View style = {[
            styles.inputField,
            {
                borderColor:
                1 > values.password.length || values.password.length >= 6
                ? '#ccc'
                :'red',

            },
             ]}
        >
            <TextInput
                placeholderTextColor='#676767'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
        </View> */}

        

        <Pressable titleSize={20} style={styles.buttons(isValid)} onPress={handleSubmit} >
            <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <View style={styles.signUpContainer}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.push('LoginScreen')}>
                <Text style={{color:'#01A4A4'}}> Log In</Text>
            </TouchableOpacity>
        </View>
        </>
        )}
    </Formik>
</ScrollView>

  )
}

const styles =StyleSheet.create({

    wrapper:{
        marginTop:80,
    },

    inputField:{
        borderRadius: 4,
        padding:12,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1,
        borderColor: '#CCC'

    },

    buttons: (isValid)=> ({
        marginTop:30,
        backgroundColor: isValid ? '#01A4A4' : '#69A6A6',
        alignItems:'center',
        justifyContent:'center',
        minHeight:42,
        borderRadius:4,
    }),

    button2: {
        marginTop:20, 
        backgroundColor: 'white', 
        minHeight:44,
        borderRadius:5,
        borderColor:'black', 
        borderWidth:1.5,
        justifyContent:'center',
        alignItems:'center'

    },

    buttonText:{
        fontSize:20,
        color:'white'

    },

    signUpContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'center',
        marginTop:40,
    }

})



export default SignUpForm