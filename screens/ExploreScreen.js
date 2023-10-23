import { View, Text, StyleSheet, ScrollView, Keyboard, Animated } from 'react-native'
import React,{useCallback, useEffect} from 'react'
import SearchBar from '../components/explore/SearchBar'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategorySection from '../components/explore/CategorySection'


const ExploreScreen = ({navigation}) => {

  // const handleTabPress = (tabName) => {
  //   switch (tabName) {
  //     case 'Home':
  //       navigation.navigate('HomeScreen');
  //       break;
  //     case 'Explore':
  //       break;
  //     // Cases for 'WeLive', 'Tickets', 'Profile'
  //     default:
  //       break;
  //   }
  // }

    
  return (
    <SafeAreaView style= {styles.container}>
        <ScrollView>
             <SearchBar />
             <CategorySection navigation={navigation}/>
        </ScrollView>       
        {/* <BottomTabs activeTab="Explore" handleTabPress={handleTabPress} icons={bottomTabIcons} /> */}
    </SafeAreaView>
    )
}



const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'FEFEFE',
      },

      bottomTabs: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    
})

export default ExploreScreen