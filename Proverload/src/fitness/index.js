import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Workout from './components/Workout'

const Stack = createNativeStackNavigator();

class Fitness extends Component {

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Workout"
                    component={Workout}
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