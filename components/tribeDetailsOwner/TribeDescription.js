import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TribeDescription = ({userTribe}) => {

    // const { userTribes } = route.params
    // console.log("tribe Description: ", userTribe.tribeDescription)

  return (
    <View style={styles.container}>
        <View>
            <View style= {styles.tribeDescriptionStyle}>
                <Text style={{fontSize:20, fontFamily:'BoldFont'}}>About</Text>
                <Text style={{fontFamily:'Font', fontSize:16}}>{userTribe.tribeDescription}</Text>
            </View>
        
            <View style={styles.tribeDetails}>
                <Text style={{fontSize:15, fontFamily:'Font', marginLeft:10, marginTop:10}}>Membership Fee: {userTribe.tribeMembershipFee}</Text>
            </View>
           
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:20,
    },

    tribeDescriptionStyle: {
        width:"100%",
        height:100,
        marginBottom:2
    },

    aboutTribe: {
        fontSize:20,
        fontFamily:'BoldFont',
    },

    descriptionStyle: {
        fontFamily:'Font',
        fontSize:16,
        marginBottom:20

    },

    tribeDetails: {
        width:300,
        height:200,
        backgroundColor:'#D9D9D9',
        borderRadius:20,
        marginLeft:40,
    }

})

export default TribeDescription