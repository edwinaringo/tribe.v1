import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const AllTribes = ({user, userTribes}) => {

  return (
    <View>
      <View style={styles.container2}>
        <View style={styles.item}>
            <Image source = {{ uri: userTribes.tribeImageUrl }} style={styles.post}/>
                <View style={styles.tribeDetails}>
                    <Text style={{color:"black", fontSize:20, fontWeight:'bold',marginLeft:3}}>{userTribes.tribeName}</Text>
                    <Text style={{color:"#3F3F3F", textAlign:"right", marginRight:1, top:48, fontSize:13, right:10}}>{userTribes.tribeLocation}</Text>
                    <Text style={{color:"#3F3F3F", top:5, marginLeft:3}}>{userTribes.tribeMembers} members</Text>
                    <Text style={{color:"#3F3F3F", bottom:5, top:10, marginLeft:3}}>{userTribes.tribeMembershipFee} membership fee</Text>
                </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container2: {
        marginTop:15,
        marginBottom:100,
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

export default AllTribes