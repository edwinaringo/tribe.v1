import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'


const Header = ({navigation}) => {
  return (
    <View>
       <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
        source ={{
            uri: 'https://cdn.iconfinder.com/stored_data/1178005/128/png?token=1690553131-VTM9DKJ7dmy1eEEBeOj%2FP3%2FwbrpfS4Bgb1lHZelDprA%3D'
        }}
        style={{marginLeft:5, width:25, height:25}}
        />
    </TouchableOpacity>
    
    <TouchableOpacity>
      <Text style={{color:'white', marginBottom:10, marginTop:7, fontSize:20, paddingLeft:10}}>__aringo__</Text>
    </TouchableOpacity>
    </View>
  )
}
export default Header