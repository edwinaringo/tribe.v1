import { View, Text, ScrollView , StyleSheet, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
import { TRIBES } from '../../data/tribes'



const Stories = () => {
  return (
    <View style={{marginBottom: 13 }}>
        <Text style={{color:'white', marginBottom:10, marginTop:0, fontSize:20, paddingLeft:8}}>Explore</Text>
        <View>
            {USERS.map((story, index) => (
              <View key={index} style={{alignItems:'center'}}>
                <Image source={{ uri:story.image }} style={styles.tribe}/>
              </View>
            ))}

        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    tribe: {
        width: 380,
        height: 90,
        borderRadius:10,
        margin:10,
  },

})




export default Stories