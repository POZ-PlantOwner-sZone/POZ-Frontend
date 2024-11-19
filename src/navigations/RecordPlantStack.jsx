import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DescriptionScreen from '../screens/DescriptionScreen';
import LikeScreen from '../screens/LikeScreen';

const Stack = createNativeStackNavigator();

const RecordPlantStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LikeScreen" component={LikeScreen}/>
          <Stack.Screen name="DescriptionScreen" component={DescriptionScreen}/>
        </Stack.Navigator>
        );
};

export default RecordPlantStack;