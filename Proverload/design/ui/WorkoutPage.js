import React, { Component } from 'react';
import { View, Text, Button  } from 'react-native';

import CreateCircuit from './CreateCircuit';

import CRUD from '../model/utils'
const BSON = require('bson');

export default class WorkoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            circuits: null,
        }
    }

    componentDidMount() {
        this.displayCircuits()
    }

    displayCircuits = () => {
        const workoutId = BSON.ObjectId(this.props.route.params.workoutId);
        const circuits = CRUD.readData('Circuit', 'workoutId == $0', workoutId);

        if(circuits) {

            

            const exercise = (id) => {
                const exerciseID = CRUD.readData('Proverload', 'circuitId == $0', BSON.ObjectId(id))[0].exerciseID;
                return CRUD.readData('Exercise', '_id == $0', BSON.ObjectId(exerciseID))[0].getName;
            }

            const amount = (id) => {
                [sets, reps, weight] = CRUD.readData('Proverload', 'circuitId == $0', BSON.ObjectId(id))[0].proverload.split(' ');
                return sets + " x " + reps + " @ " + weight + " lbs";
            }

            this.setState({circuits: Array.from(circuits)
            .map(c => (
                <View>
                    <Text>{exercise(c.ID)} for</Text>
                    <Text>{amount(c.ID)}</Text>                
                </View>
            ))})
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {this.state.circuits}
                <CreateCircuit displayCircuits={this.displayCircuits} workoutId={this.props.route.params.workoutId}/>
                <Button title="Delete All" onPress={() => {
                    CRUD.deleteAllData();
                    this.displayCircuits();
                }}></Button>
            </View>
        );
    }

}