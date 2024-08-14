import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screen/LoginScreen';

const App = () => {
  return (
    <NavigationContainer>
      <LoginScreen />
    </NavigationContainer>
  );
};

export default App;