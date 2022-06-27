import React, {Component} from 'react';
import { useDispatch, connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './components/SignIn'

import { logIn } from './slices'
import store from '../store'

const Stack = createNativeStackNavigator();

class UserAuth extends Component { 

    constructor(props) {
        super(props);

        this.handleLogIn = this.handleLogIn.bind(this);

        store.subscribe(() => {
            if(store.getState().user.token) {
                this.props.navigation.navigate("Main");
            }
        });
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

function mapStateToProps(state, ownProps?) {
    const { userAuth } = state;
    return { user: userAuth };
}

export default connect(mapStateToProps)(UserAuth)