import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/profile/Header'
import ProfilePicture from '../components/profile/ProfilePicture'
import Followers from '../components/profile/Followers'
import TicketsTribes from '../components/profile/TicketsTribes'
import BottomTabs from '../components/home/BottomTabs'


const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
       <ProfilePicture navigation={navigation}/>
       <Followers navigation={navigation}/>
       <TicketsTribes navigation={navigation}/>
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