import { View, Text, ScrollView , StyleSheet, Image} from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'



const Stories = () => {
  return (
    <View style={{marginBottom: 13 }}>
            <Text style={{color:'white', marginBottom:10}}>Top rated</Text>
        <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => (
              <View key={index} style={{alignItems:'center'}}>
                <Image source={{ uri:story.image }} style={styles.story}/>
                <Text style={{color:'white'}}>{
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
    borderColor: '#00B292'
  },

})




export default Stories