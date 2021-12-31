import React, { Component } from 'react';
import { View, Modal, Text, TextInput, Button  } from 'react-native';

import CRUD from '../model/utils'
const BSON = require('bson');

export default class CreateWorkout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        const workoutId = BSON.ObjectId(this.props.workoutId);
        CRUD.createData('Circuit', {_id: new BSON.ObjectId(), workoutId: workoutId,});
        
        this.props.displayCircuits();
    }

    handleShow = () => this.setState({show: true})

    handleClose = () => this.setState({show: false})

    render() {
        return (
            <View>
                {/* MODAL */}
                {/* <Modal
                    visible={this.state.show}
                    onRequestClose={this.handleClose}
                >
                    <Text>Workout Name:</Text>
                    <TextInput onSubmitEditing={this.handleSubmit} />
                </Modal> */}
                {/* BUTTON */}
                <Button
                    onPress={this.handleSubmit}
                    title="Create Circuit" 
                />
            </View>
        )
    }

}