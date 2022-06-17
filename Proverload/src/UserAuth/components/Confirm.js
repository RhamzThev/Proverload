import React from "react";
import {Text, View, Button} from 'react-native';

export default function Confirm(props) {

    console.log(props.state);

    return (
        <View>
            <Text>***Overview ***</Text>
            <Text>Name: {props.state.name}</Text>
            <Text>Age: {props.state.age}</Text>
            <Text>Weight: {props.state.weight}</Text>
            <Text>Height: {props.state.height}</Text>
            <Button
                onPress={props.handleConfirm}
                title="Confirm"/>
        </View>
    );
}