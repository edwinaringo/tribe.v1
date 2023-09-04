import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import ExploreScreen from '../../screens/ExploreScreen'


export const bottomTabIcons = [
    {
        name:'Home',
        active: 'https://cdn.iconfinder.com/stored_data/1171726/128/png?token=1690283758-GuvLgfMvTBDQGH6QxiDNK5Kvd7ah69S%2BrtlsV7UaxlA%3D',
        inactive: 'https://cdn.iconfinder.com/stored_data/1171733/128/png?token=1690283866-Rye%2B%2Br2ORFc750Ec7xaRLfza6mvVWdXP8pm8GUXga2c%3D',
    }, 
    {
        name:'Explore',
        active: 'https://cdn.iconfinder.com/stored_data/1171782/128/png?token=1690284678-kLZes5nAE7L514oAACqAkiX1kl2xJkOp03Wa1Hp3LdU%3D',
        inactive: 'https://cdn.iconfinder.com/stored_data/1171647/128/png?token=1690281653-rPhxiubF0je1qNYHP%2B7qFodEW5gJRWUrmaNt9vJd3mc%3D',
    },
    {
        name:'WeLive',
        active: 'https://cdn.iconfinder.com/stored_data/1171752/128/png?token=1690284233-WBMC0H4d1pUXcXpKT%2BvNeVHmGD1P7dbvTbcC6dhrsII%3D',
        inactive: 'https://cdn.iconfinder.com/stored_data/1171747/128/png?token=1690284191-RCM5fkstAAJLLp%2BuLUGljpjXxGagCzpOJVeZFELGEf8%3D'
    },
    {
        name:'Tickets',
        active: 'https://cdn.iconfinder.com/stored_data/1171770/128/png?token=1690284528-r3c%2BxtfwbfOKSTqlLInVSEIL9MwSuo7e%2B8s%2BRxE6vfw%3D',
        inactive: 'https://cdn.iconfinder.com/stored_data/1171769/128/png?token=1690284501-EKBRiDDMLBj5Az0%2FpMuK%2BI%2Fi1Zkq9lYyPxuf0%2FcG0as%3D',
    },
    {
        name:'Profile',
        active: 'https://cdn.iconfinder.com/stored_data/1171779/128/png?token=1690284639-lo1zMyZd2SCQRGOsB5zAN5Rivllj0G3pswjqP4766aI%3D',
        inactive: 'https://cdn.iconfinder.com/stored_data/1171774/128/png?token=1690284578-iWzaLXzpxl2qsBDIESLQNn5NXpZYU0nWfLe26p%2B55q8%3D',

    }
]
const BottomTabs = () => {

    const navigation = useNavigation()

    const [activeTab, setActiveTab] = useState('Explore');
  
    const Icon = ({ icon }) => (
      <TouchableOpacity onPress={() => [ handleTabPress(icon.name)]}>
        <Image
          source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
          style={styles.icon}
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
        navigation.navigate('ExploreScreen')
        break;

      // case 'WeLive' :
      //   navigation.navigate('WeLiveScreen')
      //   break;

      // case 'Tickets' :
      //   navigation.navigate('TicketsScreen')
      //   break;
      
      case 'Profile' :
        navigation.navigate('ProfileScreen')
        break;

        default:
          break;
      
    }
  }
  
    return (
      <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
          {bottomTabIcons.map((icon, index) => (
            <Icon key={index} icon={icon} />
          ))}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapper: {
      // position:'absolute',
      // width:'100%',
      // bottom: '3%',
      // zIndex: 999,
      // backgroundColor: '#000',
    },
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