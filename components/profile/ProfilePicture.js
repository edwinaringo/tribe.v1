import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const PROFILE_PICTURE = 'https://images.unsplash.com/photo-1516876902004-79f4bd1cb0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlYWNlJTIwc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
const TOKEN_ICON = 'https://cdn3.iconfinder.com/data/icons/font-awesome-solid/512/fire-flame-curved-256.png'

const ProfilePicture = () => {
  return (
    <View style={styles.profileContainer}>
       <Image source={{ uri:PROFILE_PICTURE }} style={styles.profilePicture}/>

       <Text style={styles.profileText}>Edwin Aringo</Text>

       <Pressable titleSize={25} style={styles.tokens}>
            <Image source={{uri:TOKEN_ICON}} style={styles.tokenIcon}/>
            <Text style={styles.tokenText}>20</Text>
       </Pressable>
    </View>
  )
}


const styles= StyleSheet.create({
    profilePicture: {
        width:150,
        height: 150,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',

    },

    profileContainer:{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    },

    profileText:{
        color:'white',
        marginTop:5,
        fontSize:25,
        fontWeight:'bold'
    },

    tokens:{
        marginTop:10, 
        backgroundColor: '#FDD505', 
        height:34,
        width:80,
        borderRadius:15,
        borderColor:'black', 
        borderWidth:1.5,
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

    },

    tokenText:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:20
        

    },

    tokenIcon:{
        height:20,
        width:20,
    }
})

export default ProfilePicture