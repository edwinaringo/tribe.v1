import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'




const BuyTicketsButton = ({ route }) => {

    const { post } = route.params

  return (
    <View style ={styles.container}>
        <Divider width={1} orientation="vertical" />

        <View style={styles.eventPriceStyle}>
            <Pressable titleSize={20} style={styles.ticketButton}>
                <Text style={{fontSize:17,  color:'white'}}>Get Tickets</Text>
            </Pressable>
            <Text style={styles.rateStyle}>KES {post.eventRate}</Text>
            <Text style={styles.dateStyle}>{post.date}</Text>
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create ({

    container: {
        marginBottom:1,
        flex:1,
        justifyContent:'space-between',
    },

    ticketButton: {
        marginTop:10, 
        backgroundColor: '#00B292', 
        minHeight:49,
        borderRadius:10,
        borderColor:'black', 
        borderWidth:1.5,
        width:130,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },

    dateStyle: {
        color:'white',
        left:290,
        bottom:40,
        fontSize:16,
    },

    rateStyle: {
        color: 'white',
        left:290,
        bottom:50,
        fontSize:18,
        fontWeight:'500'


    }
})

export default BuyTicketsButton