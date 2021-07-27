import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DrawerNavigator from './navigation/drawer';

export default class  App extends React.Component{
  render(){
  return (
    <NavigationContainer> 
    <DrawerNavigator/>
    </NavigationContainer>
  );
  }
}