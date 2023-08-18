import { View, Text } from 'react-native'
import React from 'react'
import { yupToFormErrors } from 'formik'
import * as Yup from 'yup'


const createTribeSchema = yupToFormErrors.object().shape({
  imageUrl: Yup.string().url().required('A url is required')

})

const FormikTribeCreator = () => {
  return (
    <View>
      <Text style={{color:'white'}}>FormikTribeCreator</Text>
    </View>
  )
}

export default FormikTribeCreator