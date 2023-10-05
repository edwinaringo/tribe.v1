import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/posts'

const Post = ({post}) => {

  const navigation = useNavigation()

  const handlePostPress = () => {
    navigation.navigate('EventScreen', {post})
  }

  return (
    <TouchableOpacity onPress={handlePostPress}>
      <View style={{ marginBottom: 25 }}>
        <PostImage post={post} />
      </View>
    </TouchableOpacity>
  )
}

const PostImage = ({post})=> (
    <View style={styles.container}>
        
        <View style={styles.item}>
            <Image source ={{ uri: post.imageUrl }} style={styles.post}/>
              <Text style={styles.eventPrice}>{post.eventRate}</Text>
                <View style={styles.postDetails}>
                    <Text style={{color:"black", fontSize:20, fontFamily:'BoldFont'}}> {post.eventName}</Text>
                    <Text style={{color:"black", textAlign:"right", marginRight:4, top:36, fontSize:16, fontFamily:'Font', right:10}}> {post.tribeName}</Text>
                    <Text style={{color:"black", bottom:10, fontFamily: 'Font'}}> {post.going}</Text>
                    <Text style={{color:"black", fontFamily:'BoldFont', bottom:3}}> {post.date}</Text>

                </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    eventPrice: {
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        left: 311.5,
        top: 25,
        width:70,
        height:28,
        borderRadius:15,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        textAlign: "center",
        alignContent:"center",
        alignItems:"center",
        fontFamily:'BoldFont'
    },

    container: {
        width:"100%",
        marginTop:15,
        marginBottom:80,
        height: 400
 
    },

    item: {
        height: 400,
        marginRight:15,
        marginLeft:15,
    },

    post: {
        width:"100%",
        height: "100%",
        borderRadius:20,  
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0,
    
      },

    postDetails: {
        width:"100%",
        height: 90,
        borderRadius:0,
        backgroundColor:"#FFFFFF",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
    }

})


export default Post