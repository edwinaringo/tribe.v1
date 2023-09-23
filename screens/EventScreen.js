import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { POSTS } from '../data/posts'
import { SafeAreaView } from 'react-native-safe-area-context'
import EventDetails from '../components/event/EventDetails'
import BuyTicketsButton from '../components/event/BuyTicketsButton'

const EventScreen = ({ navigation, route }) => {

  const selectedPost = POSTS[0]

  return (
    <SafeAreaView style= {styles.container}>
      <ScrollView>
        <EventDetails post={selectedPost} navigation={navigation} route={route}/>
      </ScrollView>      
      <BuyTicketsButton post={selectedPost} route={route}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      flex: 1,
  },
})

export default EventScreen