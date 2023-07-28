import { View, Text } from 'react-native'
import React from 'react'
import { yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { formik } from 'formik'


const createTribeSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    tribeName: Yup.string().max(200, 'Name Cannot be longer than 200 characters')
})

const FormikTribeUploader = () => {
  return (
    <View>
      <Text style={{ color: 'white' }}>FormikTribeUploader</Text>
    </View>
  )
}

export default FormikTribeUploader