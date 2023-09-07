import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import ExploreTribesScreen from '../../screens/ExploreTribesScreen'

const CategorySection = ({navigation}) => {
  return (
    <View style={styles.container}>

        <Text style={styles.categoryEventsText}>Events</Text>

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
        marginTop: 10,
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