import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import Header from '../components/tribeOwners/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import CreateEventButton from '../components/tribeOwners/CreateEventButton'
import TribePosts from '../components/tribeOwners/TribePosts'
import AllTribes from '../components/tribeOwners/AllTribes'

const TribeOwnersHomeScreen = ({navigation, route}) => {

  const {user, userTribes} = route.params || []

  console.log("Your tribes are: ", userTribes)

  return (
    <SafeAreaView style={styles.container}>
      <Header user= {user} route={route}/>
            <CreateEventButton navigation={navigation} user={user}/>

            {userTribes.length === 0 ? (
                <Text>No tribes found.</Text>
              ) : (
                userTribes.map((userTribes, index) => (
                  <AllTribes userTribes={userTribes} key={index} navigation={navigation} user={user} />
                ))
              )}
            {/* <TribePosts navigation={navigation}/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFE'
    },

    container2: {
      marginTop:15,
      marginBottom:5,
  },

  item: {
      height: 100,
      width:"100%",
      marginRight:15,
      marginLeft:15,
      flex:1,
      flexDirection:'row',
  },

  post: {
      width:120,
      height: 100,
      borderBottomLeftRadius:5,
      borderTopLeftRadius:5,
    },

  tribeDetails: {
      width:265,
      height: 100,
      borderRadius:0,
      backgroundColor:"#FFFFFF",
      borderBottomRightRadius:5,
      borderTopRightRadius:5,   
  },
})



export default TribeOwnersHomeScreen