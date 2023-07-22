import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/posts'

const Post = ({post}) => {
  return (
    <View style ={{marginBottom: 35}}>
        <PostImage post={post}/>
    </View>
  )
}

const PostImage = ({post})=> (
    <View style={styles.container}>
        <View style={styles.item}>
            <Image source ={{ uri: post.imageUrl }} style={styles.post}/>
              <Text style={styles.eventPrice}>{post.price}</Text>

                <View style={styles.postDetails}>
                    <Text style={{color:"black", fontSize:20}}> {post.eventName}</Text>
                    <Text style={{color:"black", textAlign:"right", marginRight:4}}> {post.tribeName}</Text>
                    <Text style={{color:"black"}}> {post.going}</Text>
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
    },

    container: {
        width:"100%",
        marginTop:30,
        marginBottom:100,
        height: 480
 
    },

    item: {
        height: 480,
        marginRight:15,
        marginLeft:15,
        marginBottom:40,
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