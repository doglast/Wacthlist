import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const AddButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    height: windowHeight / 15,
    backgroundColor: '#7BF6D3',
    padding: 10,
    left:18,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    borderRadius: windowHeight * 0.01,
    marginTop: windowHeight * 0.03,
    shadowColor: "#000",
    shadowOffset: {width:0.1, height:1},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2
  },
  buttonText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});