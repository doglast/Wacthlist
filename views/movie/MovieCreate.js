import React, { useEffect, useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
    } from 'react-native';
    
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';
import FormText from './components/FormText';
import axios from 'axios';
const {width, height} = Dimensions.get('window')

const MovieCreate = ({ navigation }) => {
    const [image, setImage] = useState ();
    const [title, setTitle] = useState();
    const [theme, setTheme] = useState();
    const [year, setYear] = useState ();
    const [rating, setRating] = useState ();
    const [description, setDescription] = useState ();
    const [duration, setDuration] = useState ();


    function postMovies(title, year, theme, image, rating, description, duration){
      axios.post("http://10.0.2.2:3006/filmes/cadastro",{
        Titulo: title,
        AnoLancamento: year,
        Tema: theme,
        Imagem: image,      
        Nota: rating,
        Sinopse: description,
        Duracao: duration
      })
        .then(async function(response){
          navigation.navigate("MovieIndex")
        })
        .catch(function(error){
          console.log(error)
        })
    }

    return (
<View style={{
  flexDirection:"column",
  justifyContent:"center",
  alignContent:"center",
}}>


  <ImageBackground style={styles.image}>
    <ScrollView>

    
    <View style={styles.container}>
      
      <Image 
            source={require('../../assets/images/logo.png')}
            styles={styles.logo}
        />

        <FormInput 
            labelValue={title}
            onChangeText={(title) => setTitle(title)}
            placeholderText="Título do filme"
            iconType="videocamera"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        <FormInput 
            labelValue={year}
            onChangeText={(year) => setYear(year)}
            placeholderText="Ano de lançamento"
            iconType="calendar"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        <FormInput 
            labelValue={theme}
            onChangeText={(theme) => setTheme(theme)}
            placeholderText="Tema"
            iconType="form"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        <FormInput 
            labelValue={image}
            onChangeText={(image) => setImage(image)}
            placeholderText="Link para imagem do filme"
            iconType="picture"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        
        <FormInput 
            labelValue={rating}
            onChangeText={(rating) => setRating(rating)}
            placeholderText="Nota"
            iconType="star"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        <FormText 
            labelValue={description}
            onChangeText={(description) => setDescription(description)}
            placeholderText="Sinopse"
            iconType="wechat"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        <FormText 
            labelValue={duration}
            onChangeText={(duration) => setDuration(duration)}
            placeholderText="Duracao"
            iconType="hourglass"   
            autoautoCapitalize="words"
            autoCorrect={false}    
        />
        <FormButton
          buttonTitle="Criar"
          onPress={() => postMovies(title, year, theme, image, rating, description, duration) }
        />    

    </View>
    </ScrollView>
    </ImageBackground>
    </View>

   );

};

export default MovieCreate;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,


    },
    logo: {
      height: height*0.01,
      width: width*0.01,
      resizeMode: 'cover',
    },
    text: {

      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#c48c20',
 
    },
    image: {
      resizeMode:'cover',
      height: '100%',
      width: '100%',


    },
  });