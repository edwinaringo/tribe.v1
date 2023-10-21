import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CreateEventButton = ({navigation, userTribes, route}) => {
  return (
    <View style={{alignItems:'center'}}>
        <Pressable titleSize={20} style={styles.button} onPress={()=> navigation.push('CreateEventScreen' , userTribes, route)}>
            <Text style={{fontFamily:'Font', color:'#C43D1C'}}>Create new event</Text>
        </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({

    button: {
        marginTop:20, 
        backgroundColor: 'white', 
        minHeight:44,
        width: 220,
        borderRadius:5,
        borderColor:'#C43D1C', 
        borderWidth:1.5,
        justifyContent:'center',
        alignItems:'center'
    }

})
export default CreateEventButton