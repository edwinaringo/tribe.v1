import { View, Text } from 'react-native'
import React from 'react'


const createEventSchema = yupToFormErrors.object().shape({
    imageUrl: Yup.string().url().required('A url is required')
  
  })

const FormikEventCreator = () => {
  return (
    <View>
      <Text>FormikEventCreator</Text>
    </View>
  )
}

export default FormikEventCreator