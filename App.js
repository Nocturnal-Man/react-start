import React from "react";
//import * as firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView,
  Platform
} from "react-native";
import ToDo from "./ToDo";

const{height,width}=Dimensions.get("window");

export default class App extends React.Component {

  state = {
    newToDo:""
  };

  render() {
    const { newToDo } = this.state;
    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>!!!Green World!!!</Text>

        <View style={styles.card}>
        <TextInput
         style={styles.input}
         underlineColorAndroid="#fff"
         placeholder={"New To Do"}
         value={newToDo}
         onChageText={this._crontolNewToDo}
         placeholderTextColor={"#999"}
         returnKeyType={"done"}
         autoCorrect={false}
         />
         <ScrollView>
         <ToDo/>
         </ScrollView>
        </View>
      </View>
    );
  }
  _crontolNewToDo = text => {
  this.setState({
    newToDo: text
  });
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBE1C6",
    alignItems:"center"
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor:"white",
    flex:1,
    width:width -25,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    ...Platform.select({
      ios: {
        shadowColor:"rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize:25
  }
});
