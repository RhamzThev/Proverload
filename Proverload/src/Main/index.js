import React from 'react';
import { View, Text } from 'react-native';

export default function Main(props) {
    return (
        <View>
            <Text>
                Welcome, { props.name }
            </Text>
        </View>
    )
}