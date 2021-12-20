import React, { Component } from 'react';
import { Text, View, Modal, Button, StyleSheet, TextInput } from 'react-native';
import Realm from "realm";
import {Day} from './db/Day.js';
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
    // Handle Days
    this.createDay = this.createDay.bind(this);
  }

  componentDidMount(){
    Realm.open({
      deleteRealmIfMigrationNeeded: true,
      schema: [Day],
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

  // CRUD OPERATIONS FOR DAY
  // CREATE
  createDay = (event) => {
    const name = event.nativeEvent.text;
    const realm = this.state.realm;
    const _id = new BSON.ObjectId();

    realm.write(() => {
      realm.create("Day", {
        _id: _id,
        name: name,
      })
    })

    console.log(name + " has been created.")
    this.modalClose();
  }
  // READ
  readDays = () => {
    const realm = this.state.realm;
    if(realm != null) {
      return realm.objects("Day");
    }
  }

  // UPDATE

  // DELETE


  // FOR RENDER

  displayDays = () => {
    const daysMap = this.readDays();
    if (daysMap != null) {
      const days = Array.from(daysMap);
      return days.map(day => (<Text>{day.toString}</Text>));
    }
  }


  render() {
    return (
      <View
        style={styles.centerView}>
        {/* CREATED DAYS */}

        {this.displayDays()}

        {/* MODAL AND BUTTONS */}

        <Modal
          visible={this.state.show}
          onRequestClose={this.modalClose}>
          <View style={styles.centerView}>
            <View style={styles.modalView}>
              <Text>Day Name:</Text>
              <TextInput 
                onSubmitEditing={this.createDay}/>
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
          title="New Day" />
        <Button
          style={styles.button}
          onPress={this.deleteRealms}
          title="DELETE REALMS" />
      </View>
    )
  }
}

export default App;