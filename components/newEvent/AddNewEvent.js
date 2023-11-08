import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AddNewEvent = () => (

    <View style ={styles.container}>
        <Header />
        <FormikEventCreator/>
    </View>
)

const Header = () => (
    <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create your vent</Text>
        <TouchableOpacity>
            {/* <Image 
            source={{
                uri:'https://cdn.iconfinder.com/stored_data/1171951/128/png?token=1690288761-jr1poApU3HadA%2BjJQw8H0%2FO%2BfjSmhD%2BxjfB37llJmjA%3D'
            }}
            style={{width:30, height:30}}
            /> */}
            <Text style={{color:'#0AFFD3', fontSize:17}}>Exit</Text>
        </TouchableOpacity>
    </View>
)


const styles= StyleSheet.create({
    container: {
        marginHorizontal: 10
    },

    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },

    headerText: {
        color:'white',
        fontWeight:'400',
        fontSize: 29,
        marginLeft:10,
        marginTop:10
    }
})

export default AddNewEvent