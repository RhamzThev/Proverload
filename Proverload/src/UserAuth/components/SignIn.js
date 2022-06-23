import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native';

export default function SignIn(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Log In</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onchangeText={setPassword}
            />
            <Button
                onPress={() => props.handleLogIn(username, password)}
                title="Log In"
            />
            <Text>No account? Create one!</Text>
        </View>
    );
};