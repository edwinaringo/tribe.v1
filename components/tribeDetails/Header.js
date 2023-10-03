import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'


const Header = ({navigation}) => {
  return (
    <View>
       <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
        source ={{
            uri: 'https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Chevron_Left-256.png'
        }}
        style={{marginLeft:5, width:30, height:30}}
        />
    </TouchableOpacity>
    
    <TouchableOpacity>
      <Text style={{color:'black', marginBottom:10, marginTop:7, fontSize:20, paddingLeft:10}}>__aringo__</Text>
    </TouchableOpacity>
    </View>
  )
}
export default Header