import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'




const BuyTicketsButton = ({ route }) => {

    const { post } = route.params

  return (
    <View style ={styles.container}>
        <Divider width={1} orientation="vertical" />

        <View style={styles.eventPriceStyle}>
            <Pressable titleSize={10} style={styles.ticketButton}>
                <Text style={{fontSize:17, color:'white', fontFamily:'Font'}}>Get Tickets</Text>
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
        backgroundColor: '#c43d1c', 
        minHeight:49,
        borderRadius:10,
        borderColor:'white', 
        borderWidth:1.5,
        width:130,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },

    // orange= '#7ec6c7', black= '#1d2b39' , tribal ='#c43d1c'

    dateStyle: {
        color:'black',
        left:290,
        bottom:45,
        fontSize:16,
        fontFamily: 'Font'
    },

    rateStyle: {
        color: 'black',
        left:290,
        bottom:45,
        fontSize:18,
        fontFamily: 'BoldFont'


    }
})

export default BuyTicketsButton