import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'


const CategorySection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
        <Text style={styles.categoryEventsText}>Events</Text>
      </TouchableOpacity>
      <Divider width={1} orientation="vertical"  />
      <TouchableOpacity onPress={() => navigation.push('ExploreTribesScreen')}>
        <Text style={styles.categoryTribesText}>Tribes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 100,
        marginRight: 100,
        marginTop: 20,
    },

    categoryEventsText: {
      color:'white',
      fontSize: 19,
    
    },
    categoryTribesText: {
      color:'white',
      fontSize:19,
    }
     
})

export default CategorySection