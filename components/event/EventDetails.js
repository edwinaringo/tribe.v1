import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'



const EventDetails = ({ route }) => {

  const { post } = route.params

    return (
        <View style={styles.container}>
          <View style={styles.eventImageContainer}>
                <View style={styles.image}>
                    <Image source ={{ uri: post.imageUrl }} style={styles.image}/>
                    <Text style={styles.eventNameStyle}>{post.eventName}</Text>
                </View>
          </View> 
          <Text style={{color:'white', fontSize:20, fontWeight:'bold', marginTop:10, marginLeft:12}}>Description</Text>
          <Text style={styles.eventDescriptionStyle}>{post.eventDescription}</Text>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
      },

      eventImageContainer:{
        width:'100%',
        height:350,
      },

      image: {
        width: '100%',
        height: '100%',
        position: 'absolute'
      },

      eventNameStyle: {
        color:'white',
        fontSize: 22,
        marginBottom:10,
        marginTop: 300,
        fontWeight:'bold',
        marginLeft:15,
      },

      eventDescriptionStyle: {
        color: 'white',
        fontSize: 13.8,
        margin:12,
        marginTop:15,
      }

     
})

export default EventDetails