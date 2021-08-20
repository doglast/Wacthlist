import React from 'react';
import{
  StyleSheet,
  Text, 
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const SerieCard = ({item}) =>{
  return(
    
    <ScrollView style={styles.cardView}>
        <Image style={styles.imagem} source={{uri:item.Imagem}}/>
        <Text style={styles.titulo}>{item.Titulo}</Text>
        <Text style={styles.anoLancamento}>{item.AnoLancamento}  -  Canal: {item.Canal} </Text>
        <Text style={styles.anoLancamento}>Duração de aproximada {item.Duracao} minutos</Text>
        <Text style={styles.descricao}>Nota: {item.Nota} / 5  </Text>
        <Text style={styles.descricao}>{item.Sinopse}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cardView:{
    backgroundColor:"#fff",
    margin:width * 0.03,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: {width:0.1, height:1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2
  },
  titulo:{
    width: width,
    marginHorizontal: height * 0.05,
    marginHorizontal: width * 0.03,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  descricao:{
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.01,
    color: '#7f7f7f',
    fontSize: 18,
      },
  imagem:{
    width: width*0.9,
    height: height/3,
    marginHorizontal: width * 0.02,
    marginVertical: height * 0.01,
    borderTopLeftRadius:width * 0.02,
    borderTopRightRadius:width * 0.02,
  },
  anoLancamento:{
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: '#7f7f7f'
  },
  nota:{},
})

export default SerieCard;