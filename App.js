import React, { useEffect } from 'react';
import * as Font from 'expo-font';
import AuthNavigation from "./AuthNavigation";
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';



const theme = {
  Text: {
    style: {
      fontFamily: 'Font',
    },
  },
};

export default function App() {

  useEffect(()=> {
    Font.loadAsync({
      'Font': require('./assets/fonts/Roboto-Regular.ttf'),
      'BoldFont' : require('./assets/fonts/Roboto-Medium.ttf'),
    })
  }, [])
  return (
      <AuthNavigation />
      
  )
  
  
}
