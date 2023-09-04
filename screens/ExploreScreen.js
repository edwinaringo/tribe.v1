import { View, Text, StyleSheet, ScrollView, Keyboard, Animated } from 'react-native'
import React,{useCallback, useEffect} from 'react'
import SearchBar from '../components/explore/SearchBar'
import ExploreBottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategorySection from '../components/explore/CategorySection'


const ExploreScreen = ({navigation}) => {

    
  return (
    <SafeAreaView style= {styles.container}>
        <ScrollView>
             <SearchBar />
             <CategorySection/>
        </ScrollView>       
        <ExploreBottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
    )
}



const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'black',
      },

      bottomTabs: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      },
    
})

export default ExploreScreen