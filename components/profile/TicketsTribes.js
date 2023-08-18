import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const TICKETS= 'https://cdn.iconfinder.com/stored_data/1171769/128/png?token=1690284501-EKBRiDDMLBj5Az0%2FpMuK%2BI%2Fi1Zkq9lYyPxuf0%2FcG0as%3D'
const CREATE_TRIBE = 'https://cdn.iconfinder.com/stored_data/1186035/128/png?token=1690987776-Szh9yRELmi4JrmTHZTUg7mmckjrCaQgibYbKawzwduY%3D'
const TRIBES = 'https://cdn.iconfinder.com/stored_data/1186039/128/png?token=1690987960-HWfUgRJzoHyeMy%2F8oMFbyqtBVbYnZSQr4tilj6%2BR3YQ%3D'
const BOOKED_EVENTS = 'https://cdn.iconfinder.com/stored_data/1186046/128/png?token=1690988122-pSkAMbwjpoGLG1KjBIYQdk82fXe1h06wA4dnEidEApc%3D'


const TicketsTribes = ({navigation}) => {
  return (
    <View>
        <View>
            <Text style={{color:'white',fontSize:17, fontWeight:'bold', marginTop:10, marginLeft:26}}>My Tickets</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer}>
                <Image source={{ uri:TICKETS }} style={styles.icon}/>
                <Text style={styles.ticketsText}>Bought Tickets</Text>
            </Pressable>
        </View>

        <View>
            <Text style={{color:'white',fontSize:17, fontWeight:'bold', marginTop:20, marginLeft:26}}>My Tribes</Text>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer} onPress={()=>navigation.push('CreateTribeScreen')} >
                <Image source={{ uri:CREATE_TRIBE }} style={styles.icon}/>
                <Text style={styles.ticketsText}>Create your tribe</Text>
            </Pressable>
        </View>

        <View style={styles.buttonsContainer}>
            <Pressable titleSize={25} style={styles.ticketsContainer}>
                <Image source={{ uri:TRIBES }} style={styles.icon}/>
                <Text style={styles.ticketsText}>My Tribes</Text>
            </Pressable>
        </View>

        <View>
            <Text style={{color:'white',fontSize:17, fontWeight:'bold', marginTop:20, marginLeft:26}}>Upcoming Events</Text>
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
        borderColor:'white',
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
        color:'white',
        fontSize:16,
        marginLeft:20
 
    },

    icon:{
        height:30,
        width:30,
        marginLeft:20
    }


})

export default TicketsTribes