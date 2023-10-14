import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../firebase'
import { getAuth, signOut } from 'firebase/auth'


const auth = getAuth(FIREBASE_AUTH);

const TRIBES = 'https://cdn1.iconfinder.com/data/icons/content-10/24/usergroup-64.png'

const handleSignOut = async () => {
try{
    await signOut(auth)
    console.log('Signed out')
    }catch (error) {
        console.log(error)
    }
}

const Header = ({navigation, route}) => {


  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleSignOut}>
            <Image 
                style={styles.logo} 
                source={require('../../assets/tribe7.png')}
            />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=> navigation.push('CreateTribeScreen')}>
                <Image
                  source={require('../../assets/add3.png')}

                style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.push('TribeOwnersHomeScreen')}>
               

                <Image source={{ uri:TRIBES }}

                style={styles.icon}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal:10,

},

iconsContainer:{
    flexDirection: 'row',

},
    logo : {
        width: 100,
        height: 70,
        resizeMode: 'contain',
    },

    icon: {
        width:30,
        height:30,
        marginLeft:20,
        resizeMode:'contain',
    },

    unreadBadge: {
        backgroundColor:'#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width:20,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 100,

    },

    unreadBadgeText: {
        color:'white',
        fontWeight: '600',
    },


})

export default Header