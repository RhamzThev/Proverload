import React, { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Modal, Button, StyleSheet, TextInput } from 'react-native';
import Realm from "realm";
import {Workout} from './db/Workout.js';
const BSON = require('bson');

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 25,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 25,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: null,
      show: false
    };
    // Handle Workouts
    this.createWorkout = this.createWorkout.bind(this);
  }

  componentDidMount(){
    Realm.open({
      deleteRealmIfMigrationNeeded: true,
      schema: [Workout],
    })
    .then(realm => this.setState({realm: realm}))
  }

  componentWillUnmount() {
    const realm = this.state.realm;
    if (realm !== null && !realm.isClosed) {
      realm.close();
    }
  }

  // FOR EASE PURPOSES
  deleteRealms = () => {
    const realm = this.state.realm;

    realm.write(() => {
      // Delete all objects from the realm.
      realm.deleteAll();
    });

  }

  // MODAL
  modalShow = () => this.setState({show: true})

  modalClose = () => this.setState({show: false})

  // CRUD OPERATIONS FOR WORKOUT
  // CREATE
  createWorkout = (event) => {
    const name = event.nativeEvent.text;
    const realm = this.state.realm;
    const _id = new BSON.ObjectId();

    realm.write(() => {
      realm.create("Workout", {
        _id: _id,
        name: name,
      })
    })

    console.log(name + " has been created.")
    this.modalClose();
  }
  // READ
  readWorkouts = () => {
    const realm = this.state.realm;
    if(realm != null) {
      return realm.objects("Workout");
    }
  }

  // UPDATE

  // DELETE


  // FOR RENDER

  displayWorkouts = () => {
    const workoutsMap = this.readWorkouts();
    if (workoutsMap != null) {
      const workouts = Array.from(workoutsMap);
      return workouts.map(workout => (<Text>{workout.toString}</Text>));
    }
  }


  render() {
    return (
      <View
        style={styles.centerView}>
        {/* CREATED WORKOUTS */}

        {this.displayWorkouts()}

        {/* MODAL AND BUTTONS */}

        <Modal
          visible={this.state.show}
          onRequestClose={this.modalClose}>
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Text>Workout Name:</Text>
              <TextInput 
                onSubmitEditing={this.createWorkout}/>
              <Button
                style={styles.button}
                onPress={this.modalClose}
                title="Close" />     
            </View>
          </View>
        </Modal>
        <Button
          style={styles.button}
          onPress={this.modalShow}
          title="New Workout" />
        <Button
          style={styles.button}
          onPress={this.deleteRealms}
          title="DELETE REALMS" />
      </View>
    )
  }
}

export default App;