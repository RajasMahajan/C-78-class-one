import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';
 const logitude = this.state.logitude;
 const latitude = this.state.latitude;
 const path='https://virtualsky.lco.global/embed/index.html?longitude=${logitude}&latitude=${latitude}.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
export default class StartMapScreen extends React.Component{
  
  constructor(){
    super();
    this.state={
      latitude:'',
      logitude:'',
    }
  }
  render(){
  return (
    <View
    style={{
      flex:1,
      backgroundColor:'green'
    }}
 >
   <Text
   style={{
     textAlign:'center',
     marginTop:30,
     fontSize:30,
     fontFamily:'serif',
     fontWeight:'bold'
   }}
   >Start Map</Text>
    <TextInput
    style={{
      borderWidth:5,
      marginTop:30,
      alignSelf:'center',
      width:210,
      borderRadius:20
    }}
    placeholder={"  enter longitude"}
    onChangeText={
      (oplonitute)=>{
        this.setState({
          logitude:oplonitute
        })
    }
    }
    />
        <TextInput
    style={{
      borderWidth:5,
      marginTop:30,
      alignSelf:'center',
      width:210,
      borderRadius:20
    }}
    placeholder={"  enter latitude"}
    onChangeText={
      (oplonitute)=>{
        this.setState({
          latitude:oplonitute
        })
    }
    }
    />
    
    <WebView
    scalesPageToFit={true}
    source={{ uri: path}}
    style={{
      marginTop:20,
      marginBottom:20,
      width:300,
      alignSelf:'center',
      height:200
    }}
    />

   
    </View>
  );
  }
}