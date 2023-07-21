import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { POSTS } from '../../data/posts'

const Post = ({post}) => {
  return (
    <View style ={{marginBottom: 25}}>
        <PostImage post={post}/>
    </View>
  )
}

const PostImage = ({post})=> (
    <View style={styles.container}>
        <View style={styles.item}>
            <Image source ={{ uri: post.imageUrl }} style={styles.story}/>
            <Text style={styles.eventPrice}>{post.price}</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({

    eventPrice: {
        backgroundColor:'#FFFFFF',
        position: 'absolute',
        left: 132,
        top: 18,
        width:70,
        height:28,
        borderRadius:15,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },

    container: {
        width:'100%',
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start', // if you want to fill rows left to right
    },
    item: {
        flex: 1,
        width: "50%",
     },
    story: {
        width:190,
        height: 200,
        borderRadius:20,
        marginLeft:12,
        
      },

})


export default Post