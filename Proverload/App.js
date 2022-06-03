import React from 'react';
import { NativeModules, Button } from 'react-native';

const { TestModule } = NativeModules;

const App = () => {
  const onPress = () => {
    TestModule.testDatabase();
  };

  return (
    <Button
      title="Click to test database!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default App;