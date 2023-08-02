import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/profile/Header'
import ProfilePicture from '../components/profile/ProfilePicture'
import Followers from '../components/profile/Followers'


const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
       <Header navigation={navigation} />
       <ProfilePicture/>
       <Followers/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'black',
  }

})

export default ProfileScreen