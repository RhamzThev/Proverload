import React, {Component} from 'react';
import { useDispatch, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './components/SignIn'

import { logIn } from './slices'

const Stack = createNativeStackNavigator();

class UserAuth extends Component { 

    constructor(props) {
        super(props);

        this.state = {
            username: "",            
        }

        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn(username, password) {
        const { dispatch } = this.props
        dispatch(logIn({
            username: username,
            password: password
        }));
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

function mapStateToProps(state) {
    const { UserAuth } = state;
    return {
        // LEARNING ABOUT THIS RIGHT NOW
    };
}

export default connect(mapStateToProps)(UserAuth)