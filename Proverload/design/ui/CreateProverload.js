import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import CRUD from '../model/utils'
const BSON = require('bson');

function CreateEx(props) {
    return props.show ? (
        <View>
            <Text>Exercise Name:</Text>
            <TextInput onChangeText={(text) => props.handleCreate(text)}/>
        </View>
    ) : null;
}

function AddEx(props) {
    return props.show ? (
        <View>
            <SelectDropdown 
                data={props.exerciseArrayToString()}
                onSelect={(item, index) => props.handleCreate(item)}
                buttonTextAfterSelection={(item, index) => {return item}}
                rowTextForSelection={(item, index) => {return item}}
                defaultButtonText="Add"
            />
        </View>
    ) : null;
}

export default class CreateProverload extends Component {
    constructor(props) {
      super(props);
      this.state = {

        text: null,

        showCreate: false,
        showAdd: false,

        sets: 0,
        reps: 0,
        weight: 0,
      };
    }

    handleShowCreate = () => this.setState({showCreate: true, showAdd: false,})
    handleCloseCreate = () => this.setState({showCreate: false})

    handleShowAdd = () => this.setState({showAdd: true, showCreate: false,})
    handleCloseAdd = () => this.setState({showAdd: false})

    handleCreate = (text) => this.setState({text: text.replace("Exercise: ", "")})

    handleSets = (sets) => this.setState({sets: sets ? sets : 0})
    handleReps = (reps) => this.setState({reps: reps ? reps : 0})
    handleWeight = (weight) => this.setState({weight: weight ? weight : 0})

    parseProverload = (sets, reps, weight) => {
        return sets + " " + reps + " " + weight;
    }

    handleSubmit = () => {
        if(this.state.text) {
            if(this.state.sets > 0 && this.state.reps > 0 && this.state.weight > 0) {

                const proverload = this.parseProverload(this.state.sets, this.state.reps, this.state.weight)

                const circuitId = new BSON.ObjectId();
                const workoutId = BSON.ObjectId(this.props.workoutId);

                CRUD.createData('Circuit', {_id: circuitId, workoutId: workoutId,})

                var exerciseId;
                if(this.state.showCreate) {
                    exerciseId = new BSON.ObjectId();
                } else {
                    const exId = CRUD.readData('Exercise', 'name == $0', this.state.text)[0].ID;
                    exerciseId = BSON.ObjectId(exId);
                }
                
                CRUD.createData('Proverload', {_id: new BSON.ObjectId(), circuitId: circuitId, exerciseId: exerciseId, proverload: proverload});
                this.props.handleClose();
                this.props.displayCircuits();
            } else {
                console.log("Gotta be greater than 0.")
            }
        } else {
            console.log("Gotta have a workout.")
        }
    }

    exerciseArrayToString = () => {
        const exercises = CRUD.readData('Exercise');
        return Array.from(exercises).map(e => e.toString);
    }

    render() {
        return (
            <View>
                {/* BUTTONS */}

                <Button 
                    onPress={this.handleShowCreate}
                    title="Create"/>
                <Text> OR </Text>
                <Button 
                    onPress={this.handleShowAdd}
                    title="Add"
                />
                    
                {/* SHOW WHEN PRESSED */}

                <CreateEx 
                    handleCreate={this.handleCreate} 
                    show={this.state.showCreate}/>
                <AddEx 
                    handleCreate={this.handleCreate} 
                    show={this.state.showAdd}
                    exerciseArrayToString={this.exerciseArrayToString}
                />

                {/* REPS, SETS, WEIGHT */}

                <Text>Sets:</Text>
                <TextInput onChangeText={(text) => this.handleSets(text)}/>

                <Text>Reps:</Text>
                <TextInput onChangeText={(text) => this.handleReps(text)}/>

                <Text>Weight:</Text>
                <TextInput onChangeText={(text) => this.handleWeight(text)}/>

                {/* SUBMIT */}

                <Button 
                    onPress={this.handleSubmit}
                    title="Submit"
                />

            </View>
        )
    }
}