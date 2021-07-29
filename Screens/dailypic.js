import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity,ImageBackground,SafeAreaView,Platform,StatusBar,Image} from 'react-native';
import Constants from 'expo-constants';

export default class DailypicScreen extends React.Component{
  render(){
  return (
    <View
    style={{
      flex:1
    }}
    >  
   <Text
   style={{
     textAlign:'center',
     fontFamily:'serif',
     fontWeight:'bold',
     fontSize:20
   }}
   >Daily Pic</Text>
    </View>
  );
  }
}