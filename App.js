import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import{ 
  Homepage, 
  Login, 
  Logon,
  MovieIndex,
  MovieCreate,
  SerieIndex,
  SerieCreate,
} from './views';


const theme={
  ...DefaultTheme,
  color:{
    ...DefaultTheme.colors,
    border: 'transparent'
  }
}

const Stack = createStackNavigator()

const App = () => {
  
  return(

    <NavigationContainer theme={theme}>
      <StatusBar 
        backgroundColor="#F5F5F6"
        barStyle={'dark-content'}
      />
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'Login'}
        >
            <Stack.Screen name='Homepage' component={Homepage}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Logon' component={Logon}/>
            <Stack.Screen name='MovieIndex' component={MovieIndex}/>
            <Stack.Screen name='MovieCreate' component={MovieCreate}/>
            <Stack.Screen name='SerieIndex' component={SerieIndex}/>
            <Stack.Screen name='SerieCreate' component={SerieCreate}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;