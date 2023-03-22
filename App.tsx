import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {  } from "@react-navigation/material-bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign';
import { Home } from './src/Screens/Home';
import Explore from './src/Screens/Explore';
import NewPost from './src/Screens/NewPost';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reels from './src/Screens/Reels';
import Account from './src/Screens/Account';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#673ab7',
          tabBarInactiveTintColor: '#fff',
          tabBarShowLabel: false,
          tabBarStyle:{backgroundColor: '#000'}
        }}
        initialRouteName='Home'
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Icon name="home" size={25} color='#fff' />
            )
          }} />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            
            tabBarIcon: () => (
              <Icon name="search1" size={25} color='#fff' />
            )
          }} />
        <Tab.Screen
          name="NewPost"
          component={NewPost}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Icon name="plus" size={25} color='#fff' />
            )
          }} />
        <Tab.Screen
          name="Reels"
          component={Reels}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Icon name="inbox" size={25} color='#fff' />
            )
          }} />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Icon name="user" size={25} color='#fff' />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
