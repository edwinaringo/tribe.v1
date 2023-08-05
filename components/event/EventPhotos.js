import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { withNavigation } from '@react-navigation/compat'
import { useRoute } from '@react-navigation/native'
import { POSTS } from '../../data/posts'
import { USERS } from '../../data/users'



const EventPhotos = ({navigation}) => {

    // const route = useRoute()
    const imageUrl = navigation.params.imageUrl || ''
  
    return (
        <View style={styles.container}>
         <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      },
      image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
      },
})

export default EventPhotos