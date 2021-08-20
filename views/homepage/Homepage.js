import React, { useState, useEffect} from 'react';
import{
  View,
  StyleSheet,
  Text, 
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');

const Homepage = ({navigation}) =>{
  return(
  <View style={styles.container}>
    <View style={{flexDirection: "row",flexWrap: "wrap"}}>
      <TouchableOpacity style={styles.btnFilme} onPress={() => navigation.navigate("MovieIndex")}>
        <AntDesign name={"videocamera"} size={60} color="#fff"/>
        <Text style={styles.btnText}>FILMES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSerie} onPress={() => navigation.navigate("SerieIndex")}>
        <AntDesign name={"youtube"} size={60} color="#fff"/>
        <Text style={styles.btnText}>SÉRIES</Text>
      </TouchableOpacity> 
    </View>     
  </View>  
  );
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex:1
  },
  btnFilme:{
    backgroundColor:"#7BF6D3",
    height: height,
    width: width/2,
    margin:0,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  btnSerie:{
    backgroundColor:"#87FF73",
    height: height,
    width: width/2,
    left: -width/1000,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  btnText:{
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
  }
})

export default Homepage;
