import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterPlantScreen from '../screens/RegisterPlantScreen';
import HomeTab from './HomeTab';

const Stack = createNativeStackNavigator();


const SignInStack = () => {
    return (
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="RegisterPlant" component={RegisterPlantScreen}/>
        <Stack.Screen name="HomeTab" component={HomeTab} />
      </Stack.Navigator>
      );
};

export default SignInStack;