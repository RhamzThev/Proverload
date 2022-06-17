import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Input from './components/Input';
import Confirm from './components/Confirm'

const Stack = createNativeStackNavigator();


export default class UserAuth extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            age: null,
            weight: null,
            height: null,
        }
    }

    handleName = (name) => { this.setState({name: name}) }
    handleAge = (age) => { this.setState({age: age}) }
    handleWeight = (weight) => { this.setState({weight: weight}) }
    handleHeight = (height) => { this.setState({height: height}) }
    handleConfirm = () => {}

    render(){
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Name">
                    {() => <Input 
                            type="Name" 
                            next='Age'
                            state={this.state.name}
                            setState={this.handleName}
                            navigation={this.props.navigation}/>}
                </Stack.Screen>
                <Stack.Screen name="Age">
                    {() => <Input 
                            type="Age" 
                            next='Weight'
                            state={this.state.age}
                            setState={this.handleAge}
                            navigation={this.props.navigation}/>}
                </Stack.Screen>
                <Stack.Screen name="Weight">
                    {() => <Input 
                            type="Weight" 
                            next='Height'
                            state={this.state.weight}
                            setState={this.handleWeight}
                            navigation={this.props.navigation}/>}
                </Stack.Screen>
                <Stack.Screen name="Height">
                    {() => <Input 
                            type="Height" 
                            next='Confirm'
                            state={this.state.height}
                            setState={this.handleHeight}
                            navigation={this.props.navigation}/>}
                </Stack.Screen>
                <Stack.Screen name="Confirm">
                    {() => <Confirm
                            state={this.state}
                            handleConfirm={this.handleConfirm}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}