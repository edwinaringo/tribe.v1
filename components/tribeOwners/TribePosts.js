import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TribePosts = () => {



  return (
    <View style={styles.container}>
      <Text style={{fontFamily:'BoldFont', fontSize:22}}>Tribe Posts</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20,
    }
})

export default TribePosts