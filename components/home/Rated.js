import { View, Text, ScrollView, Image, StyleSheet} from 'react-native'
import React from 'react'
import { TOPRATED } from '../../data/topRatedData'


const Rated = () => {
  return (
        <View style={{marginBottom: 13 }}>
        <Text style={{color:'white', marginBottom:10, marginTop:23, fontSize:20, paddingLeft:8}}>Top Rated</Text>
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}>
        {TOPRATED.map((story, index) => (
        <View key={index} style={{alignItems:'center'}}>
            <Image source={{ uri:story.image }} style={styles.story}/>
        </View>
        ))}

</ScrollView>
</View>

  )
}

const styles = StyleSheet.create({
    story: {
    width:120,
    height: 180,
    borderRadius:10,
    marginLeft:20,
  },

})


export default Rated