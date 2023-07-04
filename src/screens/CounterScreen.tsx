import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FloatingActionButton } from '../components/FloatingActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={[styles.text, styles.big, styles.highlight]}>{counter}</Text>

      <FloatingActionButton press={() => setCounter(c => c+1)} text='+' bottom right/> 
      <FloatingActionButton press={() => setCounter(c => c-1)} text='-' bottom left/> 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff1ee',
  },
  text: {
    color: '#555',
    fontSize: 18,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#09f',
  },
  big: {
    fontSize: 24,
  },
  containerOptions: {
    flexDirection: 'row'
  }
});
