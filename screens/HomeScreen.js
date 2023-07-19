import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Rated from '../components/home/Rated'



const HomeScreen = () => {
  return (
  <SafeAreaView style = {styles.container}> 
    <Header/>
    <Stories/>
    <Rated/>
  </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default HomeScreen