import { View, Text, StyleSheet, ScrollView, Keyboard, Animated } from 'react-native'
import React,{useCallback, useEffect, useState} from 'react'
import SearchBar from '../components/explore/SearchBar'
import ExploreBottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategorySection from '../components/explore/CategorySection'
import ExploreTribesPosts from '../components/exploreTribes/ExploreTribesPosts'
import { TRIBES } from '../data/tribes'
import { getDocs, collection, getFirestore, collectionGroup } from 'firebase/firestore'
import { FIRESTORE_DB } from '../firebase'



const ExploreTribesScreen = ({navigation}) => {

  const db = getFirestore(FIRESTORE_DB)
  
  const [tribes, setTribes] = useState([])

  useEffect(() => {
    const fetchTribes = async () => {
      try {
        const collectionRef = collectionGroup(db, 'tribes')
        console.log("Starting process")

        const querySnapshot = await getDocs(collectionRef)        
        const tribeData = querySnapshot.docs.map((doc) => doc.data())
        console.log("Query Snapshot:", querySnapshot.docs.map((doc) => doc.data()))

        setTribes(tribeData);
        console.log("Here are your tribes:", tribeData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    
    }
    fetchTribes();

  
  }, []);

    
  return (
    <SafeAreaView style= {styles.container}>
        <ScrollView>
             <SearchBar />
             <CategorySection navigation={navigation}/>
             {tribes.length === 0 ? (
                <Text>No tribes found.</Text>
              ) : (
                tribes.map((tribe, index) => (
                  <ExploreTribesPosts tribe={tribe} key={index} navigation={navigation} />
                ))
              )}
             
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

export default ExploreTribesScreen