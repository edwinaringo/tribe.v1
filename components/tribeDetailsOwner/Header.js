import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({userTribe, route, navigation}) => {


  return (
    <View style = {styles.container}>
      <Text style={{fontFamily:'BoldFont', fontSize:22}}>{userTribe.tribeName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})

export default Header