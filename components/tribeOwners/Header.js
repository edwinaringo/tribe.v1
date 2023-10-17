import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Header = ({user, route}) => {

  return (
    <View style = {styles.container}>
      <Text style={{fontFamily:'BoldFont', fontSize:22}}>Welcome,</Text>
      <Text style={{fontFamily:'BoldFont', fontSize:22}}>{user.username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})

export default Header