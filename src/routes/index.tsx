import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Dashboard from '../pages/DashboardPage'
import ListMarvel from '../pages/ListMarvelPage'



const Auth = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <Auth.Navigator screenOptions={{ headerShown: false }}>
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Marvel" component={ListMarvel} />


  </Auth.Navigator>
)

export default AuthRoutes
