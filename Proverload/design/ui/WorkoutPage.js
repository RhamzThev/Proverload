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
        var circuits = CRUD.readData('Circuit', 'workoutId == $0', workoutId);

        if(circuits) {
            this.setState({circuits: Array.from(circuits)
            .map(c => (<Button
                title={c.toString}
                onPress={() => console.log("Circuit Button has been pressed!")} 
                key={c.ID} />
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