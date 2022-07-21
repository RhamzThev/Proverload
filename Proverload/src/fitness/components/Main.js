import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

function FeaturedElement({element, navigation, route, params}) {
    return(
        <View>
            <Text>{element.name}</Text>
            <Button
                onPress={() => navigation.navigate(route, params)}
                title="SELECT"
            />
        </View>
    )
}

function ListedElement({element, handleChild}) {
    return(
        <View>
            <Text>{element.name}</Text>
            <Button
                onPress={() => handleChild(element.id)}
                title="SELECT"
            />
        </View>
    )
}

export default function Main(props) {

    return(
        <View>
            {props.elements.map(element => {
                return <ListedElement 
                    key={element.id} 
                    element={element}
                    handleChild={props.handleChild}/>
            })}
        </View>

    );
};