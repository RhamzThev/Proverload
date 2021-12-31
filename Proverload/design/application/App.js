// In App.js in a new project

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// UI IMPORTS

import HomePage from '../ui/HomePage';
import WorkoutPage from '../ui/WorkoutPage';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="Workout" component={WorkoutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
