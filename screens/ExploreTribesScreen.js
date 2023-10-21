import { Text, StyleSheet, ScrollView, Keyboard, Animated } from 'react-native'
import React,{ useEffect, useState} from 'react'
import SearchBar from '../components/explore/SearchBar'
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategorySection from '../components/explore/CategorySection'
import ExploreTribesPosts from '../components/exploreTribes/ExploreTribesPosts'
import { getDocs, collection, getFirestore, orderBy } from 'firebase/firestore'
import { FIRESTORE_DB } from '../firebase'



const ExploreTribesScreen = ({navigation}) => {

  const handleTabPress = (tabName) => {
    switch (tabName) {
      case 'Home':
        navigation.navigate('HomeScreen');
        break;
      case 'Explore':
        navigation.navigate('ExploreScreen');
        break;
      // Add cases for 'WeLive', 'Tickets', 'Profile', or any other tabs.
      default:
        break;
    }
  }

  const db = getFirestore(FIRESTORE_DB)
  
  const [tribes, setTribes] = useState([])

  useEffect(() => {
    const fetchTribes = async () => {
      try {
        const collectionRef = collection(db, 'tribes')
        console.log("Starting process")
        orderBy('createdAt', 'desc')

        const querySnapshot = await getDocs(collectionRef)     
        const tribeData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTribes(tribeData);
        console.log("Here are all the tribes:", tribeData)
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
        <BottomTabs icons={bottomTabIcons} handleTabPress={handleTabPress}/>
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

export default ExploreTribesScreen