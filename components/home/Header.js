import { View, Text , Image, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.logo} 
                source={require('../../assets/header-logo.png')}
            />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={()=> navigation.push('CreateTribeScreen')}>
                <Image
                  source={require('../../assets/addIcon2.png')}

                style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>9</Text>
                </View>

                <Image
                  source={require('../../assets/messagingIcon.png')}

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
        marginLeft:10,
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