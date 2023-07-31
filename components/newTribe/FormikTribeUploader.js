import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Formik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { formik } from 'formik'


const PLACEHOLDER_IMG = 'https://react.semantic-ui.com/images/wireframe/image.png'

const createTribeSchema = Yup.object().shape({
    // tribeImageUrl: Yup.string().url().required('A URL is required'),
    tribeName: Yup.string().max(200, 'Name Cannot be longer than 200 characters'),
    tribeDescription: Yup.string().max(200, 'Tribe description cannot be longer than 200 characters'),
    tribeLocation: Yup.string(),
    tribePrivacy: Yup.string(),
    tribeMembershipFee: Yup.number().required(),


})

const FormikTribeUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik
  initialValues={{ /*tribeName:'',*/ tribeImageUrl:'', tribeDescription:'', tribeLocation:'',tribePrivacy:'', tribeMembershipFee:''}}
        onSubmit={(values)=> console.log(values)}
        validationSchema={createTribeSchema} 
        validateOnMount={true}
    >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid})=>
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