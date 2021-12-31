import React, { Component } from 'react';
import { View, Modal, Text, TextInput, Button  } from 'react-native';

import CRUD from '../model/utils'
const BSON = require('bson');

export default class CreateExercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false,
      };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (event) => {
        const name = event.nativeEvent.text;
        const nameTaken = CRUD.readData('Exercise', 'name == $0', name).length;

        if(nameTaken <= 0) {
            CRUD.createData('Exercise', {_id: new BSON.ObjectId(), name: name,});
            this.handleClose();
        } else {
            console.log("Exercise taken.")
        }
    }

    handleShow = () => this.setState({show: true})

    handleClose = () => this.setState({show: false})

    render() {
        return (
            <View>
                {/* MODAL */}
                <Modal
                    visible={this.state.show}
                    onRequestClose={this.handleClose}
                >
                    <Text>Exercise Name:</Text>
                    <TextInput onSubmitEditing={this.handleSubmit} />
                </Modal>
                {/* BUTTON */}
                <Button
                    onPress={this.handleShow}
                    title="Create Exercise" 
                />
            </View>
        )
    }

}