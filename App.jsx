import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from './src/screen/LoginScreen';
import RegisterPlantScreen from './src/screen/RegisterPlantScreen';
// import AppNavigator from './AppNavigator';

const App = () => {

  // const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      <RegisterPlantScreen />
      {/* <Stack.Navigator initialRouteName="Start"> */}
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Main" component={Main} /> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
// export default createAppContainer(AppNavigator);