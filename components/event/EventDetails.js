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
          <Text style={{color:'black', fontSize:20, fontFamily: 'BoldFont', marginTop:10, marginLeft:12}}>Description</Text>
          <Text style={styles.eventDescriptionStyle}>{post.eventDescription}</Text>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
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
        marginLeft:15,
        fontFamily:'BoldFont'
      },

      eventDescriptionStyle: {
        color: 'black',
        margin:12,
        marginTop:10,
        fontFamily:'Font'
      }

     
})

export default EventDetails