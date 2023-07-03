import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import { Appbar } from './src/components/Appbar';

const App = () => {
  return (
    <View style={styles.container}>
      <CounterScreen />
      <Appbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
