import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HelloWorldScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff1ee'
  },
  text: {
    color: '#555',
    fontSize: 18,
    fontWeight: 'bold'
  }
});