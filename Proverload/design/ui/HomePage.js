import React, { Component } from 'react';
import { View, Text, Button  } from 'react-native';

import CreateWorkout from './CreateWorkout';

import CRUD from '../model/utils'
const BSON = require('bson');

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workouts: null,
        }
    }

    componentDidMount() {
        this.displayWorkouts()
    }

    displayWorkouts = () => {
        var workouts = CRUD.readData('Workout');
        if(workouts) {
            this.setState({workouts: Array.from(workouts)
            .map(w => (<Button
                title={w.toString}
                onPress={() => this.props.navigation.navigate('Workout', {workoutId: w.ID})} 
                key={w.ID} />))})
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.workouts}
                <CreateWorkout displayWorkouts={this.displayWorkouts}/>
                <Button title="Delete All" onPress={() => {
                    CRUD.deleteAllData();
                    this.displayWorkouts();
                }}></Button>
            </View>
        );
    }

}
