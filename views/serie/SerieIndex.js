import React, { useState, useEffect} from 'react';
import{
  FlatList,
  ScrollView,
} from 'react-native'
import SerieCard from './components/SerieCard';
import axios from 'axios';
import AddButton2 from '../../components/AddButton2';

const SerieIndex = ({navigation}) =>{
  
  const [serie, setSerie] = useState([])

  useEffect(()=>{
    getSeries()
  },[])

  function getSeries(){
    axios.get("http://10.0.2.2:3006/series/lista")
      .then(async function(response){
        setSerie(response.data);
      })
      .catch(function(error){
        console.log(error)
      })
  }

  if(!serie){
    return null
  }

  return(
    <ScrollView>     
      <AddButton2
          buttonTitle="+"
          onPress={() => navigation.navigate("SerieCreate")}
        />   
      <FlatList
        data =  {serie.series}
        keyExtractor = {(item, index) => 'key' + index}
        renderItem = {({item}) =>{
          return <SerieCard item = {item}/>
        }}
      />         
    </ScrollView>
    
  );
}

export default SerieIndex;
