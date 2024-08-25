import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignInStack from './src/navigations/SignInStack';

const App = () => {
  return (
    <NavigationContainer>
      <SignInStack />
    </NavigationContainer>
  );
};

export default App;