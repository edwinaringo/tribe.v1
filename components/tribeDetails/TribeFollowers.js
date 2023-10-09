import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase'
import { getAuth } from 'firebase/auth'
import { getFirestore, updateDoc, arrayUnion, arrayRemove, collectionGroup, collection, doc, getDoc, onSnapshot, orderBy } from 'firebase/firestore';

const TribeFollowers = ({ route, navigation }) => {

  const db = getFirestore(FIRESTORE_DB);
  const auth = getAuth(FIREBASE_AUTH);
  const currentUser = auth.currentUser;


  // useEffect(()=> {
  //   collectionGroup(db, 'tribes')
  //   orderBy('createdAt', 'desc')
  //   onSnapshot(onSnapshot.doc(tribe => ({id: tribe.id, ...tribe.data})))
  // })

    const handleJoin = async (tribe) => {

      console.log('Starting to join tribe')
        try {
   
          if (!currentUser) {
            // Handle the case when the user is not authenticated.
            return;
          }
          const tribeRef = doc(db, 'tribes', tribe.id)
          console.log('This is the tribe id:', tribe.id)
      
          // Check if the user is already a member of the tribe.
      const tribeSnapshot = await getDoc(tribeRef)
      const tribeData = tribeSnapshot.data()


      if (!tribeData || !tribeData.tribeMembers) {
        console.error('Invalid tribe data')
        return
      }

      const isMember = tribeData.tribeMembers.includes(currentUser.email)

      // Update the tribeMembers array based on the user's membership status.
      if (isMember) {
        // If the user is already a member, remove them from the tribe.
        // await updateDoc(tribeRef, {
        //   tribeMembers: arrayRemove(currentUser.email),
        // })
      } else {
        // If the user is not a member, add them to the tribe.
        await updateDoc(tribeRef, {
          tribeMembers: arrayUnion(currentUser.email),
        })
      }
    } catch (error) {
      console.error('Error updating tribe membership:', error)
    }
  }

      
    const { tribe } = route.params

    const FollowButton = ({ handleJoin }) => (
        <View style={styles.buttonsContainer}>
          <Pressable titleSize={25} style={styles.findTribes} onPress={handleJoin}>
            <Text style={styles.buttonsText}>Join Tribe</Text>
          </Pressable>
        </View>
      );

  return (

    <View>
        <View style={styles.followersContainer}>

        <View style={styles.followersText}>
                <Text style={{color:'black', fontFamily:'BoldFont', fontSize:16}}>Members</Text>
                <Text style={{color:'black',fontFamily:'BoldFont', fontSize:16}}>Events</Text>
                <Text style={{color:'black',fontFamily:'BoldFont', fontSize:16}}>Privacy</Text>
            </View>  

            <View style={styles.followerNumber}>
                <Text style={{color:'black', fontSize:16, fontFamily:'Font', left:15}}>{tribe.tribeMembers.length.toLocaleString('en')}</Text>
                <Text style={{color:'black',fontSize:16, fontFamily:'Font'}}>5</Text>
                <Text style={{color:'black',fontSize:16, fontFamily:'Font', right:15}}>{tribe.tribePrivacy}</Text>

            </View>

        </View>

        <FollowButton tribe={(tribe)} handleJoin={() => handleJoin(tribe)} />
    </View>

  )

}

const styles=StyleSheet.create({
    followersContainer:{
        marginTop:13,
        borderRadius:100,
        margin:10,
        alignContent:'space-between',
        justifyContent:'space-between',
 
    },

    buttonsContainer:{
        alignItems:'center',
        justifyContent:'center',

    },

    buttonsText:{
        color:'white',
        fontSize:16,
        fontFamily:'Font'
    },

    editProfile: {
        marginTop:1, 
        backgroundColor: '#1d2b39', 
        height:40,
        width:130,
        borderRadius:7,
        borderColor:'black', 
        borderWidth:1.5,
        alignContent:'space-between',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',


    },

    findTribes:{
        marginTop:1, 
        backgroundColor: '#1d2b39', 
        height:50,
        width:170,
        borderRadius:7,
        borderColor:'white', 
        borderWidth:1.5,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',

    },

    followerNumber:{
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:30,
        fontFamily:'Font',
        alignItems:'center',
        alignContent:'center',
        marginLeft:50,
        marginRight:50,
        marginBottom:4,
    },

    followersText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:50,
        marginRight:50,
        marginBottom:10,
        alignItems:'center'
    },

})

export default TribeFollowers