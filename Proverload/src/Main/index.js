import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Main(props) {
    return (
            // <Stack.Navigator>
            //     <Stack.Screen 
            //         name="Main"
            //         component={Main}
            //     />
            // </Stack.Navigator>
            <View>
                <Text>
                    Main Screen
                </Text>
            </View>
    )
}

function mapStateToProps(state, ownProps?) {
    const { main } = state;
    return { main: main };
}

export default connect(mapStateToProps)(Main)