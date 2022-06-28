import React, {Component} from 'react';
import { useDispatch, connect } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './components/SignIn'

import { logIn } from './slices'
import store from '../store'

const Stack = createNativeStackNavigator();

class UserAuth extends Component { 

    constructor(props) {
        super(props);

        this.handleLogIn = this.handleLogIn.bind(this);
        // this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleLogIn(username, password) {
        const { dispatch } = this.props

        state = {
            username: username,
            password: password,
        }

        action = logIn(state)

        dispatch(action)
    }

    // handleSignUp(username, password)

    render(){
        return (
            // screenOptions={{ headerShown: false }}
            <Stack.Navigator>
                <Stack.Screen name="Log In">
                    {props => <SignIn {...props} handleLogIn={this.handleLogIn}/>}
                </Stack.Screen>
                <Stack.Screen name="Sign Up">
                    {() => <SignUp handleSignUp={this.handleSignUp}/>}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
}

function mapStateToProps(state, ownProps?) {
    const { userAuth } = state;
    return { user: userAuth };
}

export default connect(mapStateToProps)(UserAuth)