import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Rated from '../components/home/Rated'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'



const HomeScreen = () => {
  return (
  <SafeAreaView style = {styles.container}> 
    <ScrollView>
      <Header/>
      <Stories/>
      <Rated/>
      <ScrollView>
        {POSTS.map((post, index)=>(
              <Post post={post} key={index} />
        ))}
      </ScrollView>
    </ScrollView>
    <BottomTabs icons={bottomTabIcons}/>
  </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    postContainer: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
        
    }
})

export default HomeScreen