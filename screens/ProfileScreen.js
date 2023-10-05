import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/profile/Header';
import ProfilePicture from '../components/profile/ProfilePicture';
import Followers from '../components/profile/Followers';
import TicketsTribes from '../components/profile/TicketsTribes';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const ProfileScreen = ({ route, navigation }) => {
  // Get the username from the route params
  const { username } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView>
        <ProfilePicture navigation={navigation} username={username} />
        <Followers navigation={navigation} />
        <TicketsTribes navigation={navigation} />
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'FEFEFE',
  },
});

export default ProfileScreen;
