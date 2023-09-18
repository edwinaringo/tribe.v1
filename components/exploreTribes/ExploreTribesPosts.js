import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/posts'
import { TRIBES } from '../../data/tribes'

const ExploreTribesPosts = ({tribe}) => {

  return (
    <View style = {{marginBottom:0}}>
        <TribeImage tribe={tribe}/>
    </View>
  )

  // return (
  //   <TouchableOpacity onPress={handleImageTap}>
  //     <View style={{ marginBottom: 25 }}>
  //       <PostImage post={post} />
  //     </View>
  //   </TouchableOpacity>
  // )
}

const TribeImage = ({tribe})=> (
  
    <View style={styles.container}>
        <View style={styles.item}>
            <Image source = {{ uri: tribe.tribeImageUrl }} style={styles.post}/>
                <View style={styles.tribeDetails}>
                    <Text style={{color:"black", fontSize:20, fontWeight:'bold',marginLeft:3}}>{tribe.tribeName}</Text>
                    <Text style={{color:"#3F3F3F", textAlign:"right", marginRight:1, top:48, fontSize:13, right:10}}>{tribe.tribeLocation}</Text>
                    <Text style={{color:"#3F3F3F", top:5, marginLeft:3}}>232 members</Text>
                    <Text style={{color:"#3F3F3F", bottom:5, top:10, marginLeft:3}}>{tribe.tribeMembershipFee} membership fee</Text>
                </View>
        </View>
    </View>
     
)

const styles = StyleSheet.create({


    container: {
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


export default ExploreTribesPosts