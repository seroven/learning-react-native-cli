import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const ApiListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello orld!</Text>
    </View>
  );
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