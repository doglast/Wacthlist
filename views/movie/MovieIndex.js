import React, { useState, useEffect} from 'react';
import{
  FlatList,
  ScrollView
} from 'react-native'
import MovieCard from './components/MovieCard';
import axios from 'axios';
import AddButton from '../../components/AddButton';

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
    <ScrollView>
      <AddButton
          buttonTitle="+"
          onPress={() => navigation.navigate("MovieCreate")}
        />   
      <FlatList
        data =  {movie.filmes}
        keyExtractor = {(item, index) => 'key' + index}
        renderItem = {({item}) =>{
          return <MovieCard item = {item}/>
        }}
      />         
    </ScrollView>
    
  );
}

export default MovieIndex;
