import React, {Component} from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import store from '../store';

const Stack = createNativeStackNavigator();

class Main extends Component { 

    constructor(props) {
        super(props); 
    }

    render() {
        return (
            // <Stack.Navigator>
            //     <Stack.Screen 
            //         name="Main"
            //         component={Main}
            //     />
            // </Stack.Navigator>
            <View>
                <Text>
                    name: {store.getState().auth.username}
                </Text>
            </View>
    )
    }
}

function mapStateToProps(state, ownProps?) {
    const { main } = state;
    return { main: main };
}

export default connect(mapStateToProps)(Main)