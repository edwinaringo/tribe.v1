import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Followers = () => {
  return (
    <View>
        <View style={styles.followersContainer}>
            <View style={styles.followerNumber}>
                <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>3450</Text>
                <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>203</Text>
                <Text style={{color:'white',fontSize:16, fontWeight:'bold'}}>5</Text>
            </View>

            <View style={styles.followersText}>
                <Text style={{color:'white'}}>Followers</Text>
                <Text style={{color:'white'}}>Following</Text>
                <Text style={{color:'white'}}>Tribes</Text>
            </View>  
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.editProfile}>
                    <Text style={styles.buttonsText}>Edit Profile</Text>
            </Pressable>

            <Pressable titleSize={25} style={styles.findTribes}>
                    <Text style={styles.buttonsText}>Find Tribes</Text>
            </Pressable>
        </View>
    </View>

  )
}

const styles=StyleSheet.create({
    followersContainer:{
        marginTop:10,
        borderRadius:100,
        margin:10,
        alignContent:'space-between',
        justifyContent:'space-between',
 
    },

    buttonsContainer:{
        borderRadius:100,
        marginLeft:50,
        flexDirection:'row',
    },

    buttonsText:{
        color:'white',
        fontSize:15,
    },

    editProfile: {
        marginTop:1, 
        backgroundColor: 'black', 
        height:40,
        width:130,
        borderRadius:7,
        borderColor:'white', 
        borderWidth:1.5,
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',


    },

    findTribes:{
        marginTop:1, 
        backgroundColor: 'black', 
        height:40,
        width:130,
        borderRadius:7,
        borderColor:'white', 
        borderWidth:1.5,
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginLeft:40

    },

    followerNumber:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:30,
        alignItems:'center',
        alignContent:'center',
        marginLeft:50,
        marginRight:50,
        marginBottom:10
    },

    followersText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:50,
        marginRight:50,
        marginBottom:10,
        alignItems:'center'
    },

})

export default Followers