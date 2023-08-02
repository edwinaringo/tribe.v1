import { View, Text, TextInput, Button, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const LogInForm = ({navigation}) => {

    const LoginFormSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        password: Yup.string().required().min(6, 'Your password has to have at least 6 characters')
    })
  return (
    <View style = {styles.wrapper}>

        <Formik
            initialValues={{email:'', password: ''}}
            onSubmit={(values) =>{
                console.log(values)
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
                    values.email.length <1 || Validator.validate(values.email)
                     ? '#ccc' 
                     : 'red',
                    },
                ]}
            >
                <TextInput 
                    placeholderTextColor='#444'
                    placeholder='Phone number, username or email'
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
                    1 > values.password.length || values.password.length >= 6
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
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
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
                    <Text style={{color:'#01A4A4'}}> Sign Up</Text>
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

export default LogInForm