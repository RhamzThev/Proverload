import React, {Component} from 'react';

import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';

import { signOut } from '../auth/slices';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home'
import Fitness from '../fitness'

import store from '../store';

const Stack = createNativeStackNavigator();

class Main extends Component { 

    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);

    }

    handleSignOut() {
        const { dispatch } = this.props
        action = signOut()

        dispatch(action)
    }

    render() {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home">
                    {props => <Home {...props} name={store.getState().auth.name}/>}
                </Stack.Screen>
                <Stack.Screen name="Fitness">
                    {props => <Fitness {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
            // <View>
            //     <Text>
            //         name: {store.getState().auth.username}
            //     </Text>
            //     <Button 
            //         onPress={() => this.handleSignOut()}
            //         title="SIGN OUT"
            //     />
            // </View>
    )
    }
}

function mapStateToProps(state, ownProps?) {
    const { main } = state;
    return { main: main };
}

export default connect(mapStateToProps)(Main)