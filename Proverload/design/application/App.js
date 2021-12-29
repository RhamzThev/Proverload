// In App.js in a new project

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Realm from "realm";

// MODEL IMPORTS

import {Circuit} from "../model/Circuit.js";
import {Exercise} from "../model/Exercise.js";
import {Proverload} from "../model/Proverload.js";
import {Workout} from "../model/Workout.js";

// UI IMPORTS

import HomePage from '../ui/HomePage.js';
import WorkoutPage from '../ui/WorkoutPage.js';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  componentDidMount() {
    Realm.open({
      deleteRealmIfMigrationNeeded: true,
      schema: [Circuit, Exercise, Proverload, Workout]
      }).then(realm => this.setState({ realm }))
  }

  componentWillUnmount() {
    // Close the realm if there is one open.
    const {realm} = this.state;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }



  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Workout" component={WorkoutPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;