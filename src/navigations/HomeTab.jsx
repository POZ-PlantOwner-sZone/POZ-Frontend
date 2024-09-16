import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';
import MyScreen from '../screens/MyScreen';
import LikeScreen from '../screens/LikeScreen';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator initialRouteName="Login">
            <Tab.Screen name="HOME" component={HomeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="CHARACTER" component={CharacterScreen} options={{headerShown: false}}/>
            <Tab.Screen name="LIKE" component={LikeScreen} options={{headerShown: false}}/>
            <Tab.Screen name="MY" component={MyScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    );
};

export default HomeTab;