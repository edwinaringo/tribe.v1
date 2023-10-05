import { View, Text, ScrollView , StyleSheet, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'



const Stories = () => {
  return (
    <View style={{marginBottom: 10 }}>
            <Text style={{color:'black', marginBottom:10, marginTop:0, fontSize:20, paddingLeft:8, fontFamily:'BoldFont'}}>Happening Now</Text>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => (
              <View key={index} style={{alignItems:'center'}}>
                <Image source={{ uri:story.image }} style={styles.story}/>
                <Text style={{color:'black', fontFamily:'Font'}}>{
                  story.user.length > 11 
                  ?story.user.slice(0,10).toLowerCase() +'...'
                  :story.user.toLowerCase()}
                </Text>
              </View>
            ))}

        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    story: {
    width:90,
    height: 90,
    borderRadius:50,
    marginLeft:12,
    borderWidth:3,
    borderColor: '#c43d1c'
  },

})




export default Stories