import React, { useState, useEffect} from 'react';
import{
  View,
  StyleSheet,
  Text, 
  Button,
  FlatList,
  TouchableOpacity
} from 'react-native'
import MovieCard from './components/MovieCard';
import {filmes} from '../../services/api';
import axios from 'axios';

const MovieIndex = ({navigation}) =>{
  
  const [movie, setMovie] = useState([])

  useEffect(()=>{
    getMovies()
  },[])

  function getMovies(){
    axios.get("http://10.0.2.2:3006/filmes/lista")
      .then(async function(response){
        setMovie(response.data);
      })
      .catch(function(error){
        console.log(error)
      })
  }

  if(!movie){
    return null
  }

  return(
    <View>
      <FlatList
        data =  {movie.filmes}
        keyExtractor = {(item, index) => 'key' + index}
        renderItem = {({item}) =>{
          return <MovieCard item = {item}/>
        }}
      />         
    </View>
    
  );
}

export default MovieIndex