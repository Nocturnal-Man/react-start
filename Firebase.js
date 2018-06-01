import React from "react";
import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import * as firebase from 'firebase'

let database;
let config={
  apiKey: "AIzaSyDvvB94rtRxQIAzrfGzJQk7safzswMYJMI",
  authDomain: "cap2018-290a0.firebaseapp.com",
  databaseURL: "https://cap2018-290a0.firebaseio.com",
  projectId: "cap2018-290a0",
  messagingSenderId: "609997833933"
}
export const fire = () =>{
  firebase.initializeApp(config);
  render() {
  database = firebase.database();
  return (
    database.ref('/WAL').set('value');
    <View>
    <Text>위험 수위 : 'value'</Text>
    </View>
  );
  }
}
