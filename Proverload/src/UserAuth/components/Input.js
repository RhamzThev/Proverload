import React, {useState} from "react";
import {Text, TextInput, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Input(props) {

    return (
        <View>
            <Text>{props.type}</Text>
            <TextInput
                placeholder={props.type}
                value={props.state}
                onChangeText={props.setState}/>
            <Button
                onPress={() => props.navigation.navigate('User Creation', {screen: props.next})}
                title="Submit"/>
        </View>
    );
};