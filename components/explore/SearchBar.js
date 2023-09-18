import { View, Text, StyleSheet, TextInput, Keyboard, Animated } from 'react-native'
import React, { useRef } from 'react'

const SearchBar = () => {


  return (
    <View style= {styles.wrapper}>
        
        <TextInput style = {styles.searchField}
            placeholderTextColor='#706F6F'
            placeholder='Search'
            autoCapitalize='none'
            keyboardType='default'
            autoFocus={false}
        />  
    </View>
  )
}

const styles = StyleSheet.create({

    wrapper: {
        margin:3,
       
    },

    searchField:{
        borderRadius: 10,
        padding:8,
        backgroundColor:'#FAFAFA',
        marginBottom:10,
        marginLeft: 10,
        marginRight: 10,
    },

})

export default SearchBar