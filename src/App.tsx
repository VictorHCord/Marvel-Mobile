import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import SplashScreen from 'react-native-splash-screen'
import Routes from './routes'


const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#f11f22" />
      <Routes />
    </NavigationContainer>
  )
}

export default App
