import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const TICKETS= 'https://img.icons8.com/?size=50&id=18638&format=png'
const CREATE_TRIBE = 'https://cdn1.iconfinder.com/data/icons/content-10/24/usergroup-plus-64.png'
const TRIBES = 'https://cdn1.iconfinder.com/data/icons/content-10/24/usergroup-64.png'
const BOOKED_EVENTS = 'https://cdn0.iconfinder.com/data/icons/business-office-1-7/55/13-64.png'


const TicketsTribes = ({navigation, route, user, userTribes}) => {
  return (
    <View>
        <View>
            <Text style={{color:'black',fontSize:17, fontFamily:'BoldFont', marginTop:10, marginLeft:26}}>My Tickets</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer}>
                <Image source={{ uri:TICKETS }} style={styles.icon}/>
                <Text style={styles.ticketsText}>Bought Tickets</Text>
            </Pressable>
        </View>

        <View>
            <Text style={{color:'black',fontSize:17, fontFamily:'BoldFont', marginTop:20, marginLeft:26}}>My Tribes</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer} onPress={()=>navigation.push('CreateTribeScreen') } >
                <Image source={{ uri:CREATE_TRIBE }} style={styles.icon}/>
                <Text style={styles.ticketsText}>Create your tribe</Text>
            </Pressable>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer} onPress={()=>navigation.push('TribeOwnersHomeScreen', user, userTribes)}>
                <Image source={{ uri:TRIBES }} style={styles.icon}/>
                <Text style={styles.ticketsText}>My Tribes</Text>
            </Pressable>
        </View>

        <View>
            <Text style={{color:'black',fontSize:17, fontFamily:'BoldFont', marginTop:20, marginLeft:26}}>Upcoming Events</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer}>
                <Image source={{ uri:BOOKED_EVENTS }} style={styles.icon}/>
                <Text style={styles.ticketsText}>Booked Events</Text>
            </Pressable>
        </View>

      
    </View>
  )
}

const styles =StyleSheet.create({

    buttonsContainer:{
        alignItems:'center'
    },

    ticketsContainer:{
        borderWidth:1,
        borderColor:'black',
        width:380,
        height:48,
        marginTop:5,
        alignItems:'center',
        borderRadius:7,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection:'row',

    },

    ticketsText:{
        color:'black',
        fontSize:16,
        marginLeft:20,
        fontFamily: 'Font'
 
    },

    icon:{
        height:30,
        width:30,
        marginLeft:20
    }


})

export default TicketsTribes