import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './components/Main'
import Workout from './components/Workout'
import Set from './components/Set'

const Stack = createNativeStackNavigator();

class Fitness extends Component {

    render() {
        return (
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={Main}
                />
                <Stack.Screen
                    name="Regime"
                    component={Main}
                />
                <Stack.Screen
                    name="Workout"
                    component={Workout}
                />
                <Stack.Screen
                    name="Set"
                    component={Set}
                />
            </Stack.Navigator>
        );
    }
}

function mapStateToProps(state, ownProps?) {
    const { fitness } = state;
    return { fitness: fitness };
}

export default connect(mapStateToProps)(Fitness)