import React, { useState } from 'react'
import { View, Text, Button, Modal, TextInput } from 'react-native';

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
                title="Select"
            />
        </View>
    )
}

function CreateElement({handleCreate}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Button
                onPress={() => setModalVisible(true)}
                title="+"
            />
            <Modal
                visible={modalVisible}
            >
                <View>
                    <TextInput
                    placeholder="Name"/>
                    <Button
                        onPress={() => {
                            handleCreate(name);
                            setModalVisible(false);
                        }}
                        title="Create"
                    />
                    <Button
                        onPress={() => setModalVisible(false)}
                        title="Cancel"
                    />
                </View>
            </Modal>
        </View>
    )
}

export default function Regime(props) {

    return(
        <View>
            {props.elements.map(element => {
                return <ListedElement 
                    key={element.id} 
                    element={element}
                    handleChild={props.handleChild}/>
            })}
            <CreateElement handleCreate={props.handleCreate} />
        </View>

    );
};