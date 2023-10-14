import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase'
import { db, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const TribeLogInForm = ({navigation}) => {

    const auth = getAuth(FIREBASE_AUTH);
    const db = getFirestore(FIRESTORE_DB);

    const LoginFormSchema = Yup.object().shape({
        tribeEmail:Yup.string().email().required('An email is required'),
        tribePassword: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
    })

    const onLogin = async (tribeEmail, tribePassword) => {
        try {
          await signInWithEmailAndPassword(auth, tribeEmail, tribePassword)
          console.log("Firebase log in successful", tribeEmail, tribePassword)
        } catch (error) {
         console.log('Firebase failed')
         Alert.alert('User name or password is invalid', error.message,
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK'),
                    style:'cancel',
                },
                {text:'Sign Up', onPress: () => navigation.push('SignUpScreen')}
            ]
        ) 
        }
      }

  return (
    <View style = {styles.wrapper}>

        <Formik
            initialValues={{tribeEmail:'', tribePassword: ''}}
            onSubmit={values => {
                onLogin(values.tribeEmail, values.tribePassword)
            }}
            validationSchema={LoginFormSchema}
            validationOnMount={true}
            >

            {({handleChange, handleBlur, handleSubmit, values, isValid})=>(

            <>
            <View style = {[
                styles.inputField, 
                {
                    borderColor: 
                    values.tribeEmail.length <1 || Validator.validate(values.tribeEmail)
                     ? '#ccc' 
                     : 'red',
                    },
                ]}
            >
                <TextInput 
                    placeholderTextColor='#444'
                    placeholder='Enter Tribe Email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('tribeEmail')}
                    onBlur={handleBlur('tribeEmail')}
                    value={values.tribeEmail}
                />
            </View>

            <View style = {[
                styles.inputField,
                {
                    borderColor:
                    1 > values.tribePassword.length || values.tribePassword.length >= 6
                    ? '#ccc'
                    :'red',

                },
                 ]}
            >
                <TextInput
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('tribePassword')}
                    onBlur={handleBlur('tribePassword')}
                    value={values.tribePassword}
                />
            </View>
            <View style={{alignItems: 'center', marginBottom:30}}>
                <Text>Forgot password?</Text>
            </View>

            <Pressable titleSize={20} style={styles.buttons(isValid)} onPress={handleSubmit} >
                <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={{marginTop:65}}>
                <Pressable titleSize={20} style={styles.button2}>
                    <Text>Log in with Google</Text>
                </Pressable>

                <Pressable titleSize={20} style={styles.button2}>
                    <Text>Log in with Instagram</Text>
                </Pressable>
            </View>

            <View style={styles.signUpContainer}>
                <Text>Dont have an account?</Text>
                <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
                    <Text style={{color:'#c43d1c'}}> Sign Up</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
        </Formik>
    </View>
  )
}

const styles = StyleSheet.create({

    wrapper:{
        marginTop:80,
    },

    inputField:{
        borderRadius: 4,
        padding:12,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        borderWidth:1,

    },

    buttons: (isValid)=> ({
        backgroundColor: isValid ? '#c43d1c' : '#c43d1c',
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

export default TribeLogInForm