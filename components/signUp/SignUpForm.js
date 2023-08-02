import { View, Text, TextInput, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignUpForm = ({navigation}) => {
  const SignupFormSchema = Yup.object().shape({
    userName: Yup.string().required().min(2, 'A user name cannot be less than 2 characters'),
    email:Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password cannot be less than 6 characters'),
    age: Yup.number().required().min(13, 'You have to be 13 and above to use this application'),
    phoneNumber: Yup.number(),
    gender: Yup.string()
  })

  return (
    
    <ScrollView style = {styles.wrapper}>

    <Formik
        initialValues={{userName: '', email:'', password: '', age: '', phoneNumber: '', gender: ''}}
        onSubmit={(values) =>{
            console.log(values)
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
                1 > values.userName.length || values.userName.length >= 2
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
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
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