import React from 'react';
import Home from './src/pages/Home'
import * as Font from 'expo-font';
export default function App() {

  const [loaded] = Font.useFonts({
    OpenSans: require('./src/assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./src/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
   <Home/>
  );
}
