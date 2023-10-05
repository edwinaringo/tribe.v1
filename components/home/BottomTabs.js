import { View, TouchableOpacity, StyleSheet, Image, Animated, Keyboard, Easing } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import ExploreScreen from '../../screens/ExploreScreen'


export const bottomTabIcons = [
    {
        name:'Home',
        active: 'https://cdn0.iconfinder.com/data/icons/phosphor-fill-vol-3/256/house-fill-64.png',
        inactive: 'https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Home-01-64.png',
    }, 
    {
        name:'Explore',
        active: 'https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/search-64.png',
        inactive: 'https://cdn2.iconfinder.com/data/icons/user-interface-169/32/search-64.png',
    },
    {
        name:'WeLive',
        active: 'https://cdn4.iconfinder.com/data/icons/map-and-location-1-2/48/1-64.png',
        inactive: 'https://cdn1.iconfinder.com/data/icons/ui-essential-17/32/UI_Essential_Outline_2_essential-app-ui-location-map-pin-22-64.png'
    },
    {
        name:'Tickets',
        active: 'https://img.icons8.com/?size=50&id=18667&format=png',
        inactive: 'https://img.icons8.com/?size=50&id=18638&format=png',
    },
    {
        name:'Profile',
        active: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-64.png',
        inactive: 'https://cdn2.iconfinder.com/data/icons/user-interface-169/32/about-64.png',

    }
]
const BottomTabs = ({tribes, username}) => {

    const navigation = useNavigation()

    const [activeTab, setActiveTab] = useState('Home');
    const [bottomTabVisible, setBottomTabVisible] = useState(true)
    const translateY = new Animated.Value(0)

    const _keyboardDidShow = useCallback(()=> {
      setBottomTabVisible(false)
      Animated.timing(translateY, {
        toValue: 1,
        duration:300,
        easing: Easing.easeOut,
        useNativeDriver:true,
      }).start();
    }, []);

    const _keyboardDidHide = useCallback(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.easeIn,
        useNativeDriver: true,
      }).start(() => {
        setBottomTabVisible(true);
      });
    }, []);

    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', _keyboardDidShow)
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', _keyboardDidHide)
  
      return () => {
        keyboardDidShowListener.remove()
        keyboardDidHideListener.remove()
      };
    }, [_keyboardDidShow, _keyboardDidHide])


  
  
    const Icon = ({ icon }) => (
      <TouchableOpacity onPress={() => [ handleTabPress(icon.name)]}>
        <Image
          source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
          style={[styles.icon, { opacity:bottomTabVisible ? 1 : 0}]}
        />
      </TouchableOpacity>
    );

    const handleTabPress = (tabName) => {
      setActiveTab(tabName)
    

    switch (tabName) {
      case 'Home':
        navigation.navigate('HomeScreen')
        break;
      case 'Explore' :
        navigation.navigate('ExploreScreen', {tribes})
        break;

      // case 'WeLive' :
      //   navigation.navigate('WeLiveScreen')
      //   break;

      // case 'Tickets' :
      //   navigation.navigate('TicketsScreen')
      //   break;
      
      case 'Profile' :
        navigation.navigate('ProfileScreen', {username})
        break;

        default:
          break;
      
    }
  }
  
    return (
    <Animated.View style={[styles.wrapper, { transform: [{ translateY: translateY.interpolate({ inputRange: [0, 1], outputRange: [0, 50] }) }] }]}>
      <Divider width={2} orientation="vertical" />
      <View style={styles.container}>
        {bottomTabIcons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </Animated.View>
    );
  };
  
  const styles = StyleSheet.create({
    // wrapper: {
    //   position:'absolute',
    //   width:'100%',
    //   zIndex: 999,
    //   backgroundColor: '#000',
    // },
    icon: {
      width: 30,
      height: 30,
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingTop: 10,
    },
  });
  

  
export default BottomTabs