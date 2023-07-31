import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikTribeUploader from './FormikTribeUploader'

const CreateNewTribe = ({navigation}) => (
    <View style={styles.container}>
        <Header navigation={navigation}/>
        <FormikTribeUploader />
    </View>
 
)

const Header = ({navigation}) => (
<View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image 
        source ={{
            uri: 'https://cdn.iconfinder.com/stored_data/1178005/128/png?token=1690553131-VTM9DKJ7dmy1eEEBeOj%2FP3%2FwbrpfS4Bgb1lHZelDprA%3D'
        }}
        style={{width:25, height:25}}
        />
    </TouchableOpacity>
  <Text style = {styles.headerText}>Create your tribe</Text>

  <TouchableOpacity onPress={()=> navigation.goBack()}>
     <Text style={{color:'#01A4A4', fontSize:16}}>Exit</Text>
  </TouchableOpacity>
  

</View>
)

const styles = StyleSheet.create({

    container:{
        marginHorizontal:10
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    headerText: {
        color:'#fff',
        fontWeight:'700',
        fontSize:20,
        marginLeft:27.5,
    }
})

export default CreateNewTribe