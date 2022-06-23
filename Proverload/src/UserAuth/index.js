import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './components/SignIn'

const Stack = createNativeStackNavigator();


export default class UserAuth extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            username: "",            
        }

        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn(username, password) {
        
     }

    render(){
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Log In">
                    {() => <SignIn handleLogIn={this.handleLogIn}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}