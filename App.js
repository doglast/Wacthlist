import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import{ 
  Homepage, 
  Login, 
  Logon
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
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;