import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TribeDescription = ({route}) => {

    const { tribe } = route.params

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.aboutTribe}>About Tribe</Text>
            <Text style={styles.descriptionStyle}>{tribe.tribeDescription}</Text>

            <View style={styles.tribeDetails}>
                <Text style={{fontSize:15, fontFamily:'Font', marginLeft:10, marginTop:10}}>Membership Fee: {tribe.tribeMembershipFee}</Text>
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
        marginLeft:30,
    }

})

export default TribeDescription