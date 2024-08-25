import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigations/Stack';

const App = () => {

  // options={{tabBarStyle: {display: 'none'}}}

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;