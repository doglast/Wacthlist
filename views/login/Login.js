import React, {useState} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
    
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState ();
    const [password, setPassword] = useState ();

    return (
<View style={{
  flexDirection:"column",
  justifyContent:"center",
  alignContent:"center",
}}>
  <ImageBackground source={require("../../assets/images/login.png")} style={styles.image}>
    <View style={styles.container}>          

        <FormInput 
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user" 
            keyboardType="email-address"   
            autoautoCapitalize="none"
            autoCorrect={false}    
        />
        <FormInput 
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Senha"
            iconType="lock"
            secureTextEntry={true}   
        />
        <FormButton
          buttonTitle="Entrar"
          onPress={() => navigation.navigate('Homepage')}
        />

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Logon')}>
        <Text style={styles.navButtonText}>
          Ainda não tem conta? Clique aqui
        </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>

   );

};

export default Login;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,


    },
    logo: {
      height: 15,
      width: 15,
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