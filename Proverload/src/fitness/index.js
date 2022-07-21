import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './components/Main'
import Workout from './components/Workout'
import Set from './components/Set'

import { selectRegime, selectWorkout } from '../fitness/slices'

import store from '../store';

const Stack = createNativeStackNavigator();

class Fitness extends Component {

    constructor(props) {
        super(props);
        this.handleSelectRegime = this.handleSelectRegime.bind(this);
        this.handleSelectWorkout = this.handleSelectWorkout.bind(this);
    }

    handleSelectRegime(id) {
        const { dispatch } = this.props

        action = selectRegime(id)
        dispatch(action)
        this.props.navigation.navigate("Fitness Page", {screen: "Regime"})
    }

    handleSelectWorkout(id) {
        const { dispatch } = this.props

        action = selectWorkout(id)
        dispatch(action)
        this.props.navigation.navigate("Fitness Page", {screen: "Workout"})
    }

    render() {
        return (
            <Stack.Navigator initialRouteName="Fitness">
                <Stack.Screen name="Fitness">
                    {props => <Main 
                        {...props} 
                        elements={store.getState().fitness.regimes}
                        handleChild={this.handleSelectRegime}/>}
                </Stack.Screen>
                <Stack.Screen name="Regime">
                    {props => <Main 
                        {...props} 
                        elements={store.getState().fitness.workouts}
                        handleChild={this.handleSelectWorkout}/>}
                </Stack.Screen>
                <Stack.Screen name="Workout">
                    {props => <Workout 
                        {...props} 
                        elements={store.getState().fitness.sets}/>}
                </Stack.Screen>
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