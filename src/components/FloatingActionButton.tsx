import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FloatingButtonActionType} from '../types/ButtonsType';

export const FloatingActionButton: React.FC<FloatingButtonActionType> = ({
  setCounter,
  text,
  top,
  bottom,
  right,
  left,
}) => {
  const FloatingActionButtonStyles = [
    styles.container,
    top && styles.alignTop,
    bottom && styles.alignBottom,
    right && styles.alignRight,
    left && styles.alignLeft,
  ];

  return (
    <TouchableOpacity style={FloatingActionButtonStyles}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  button: {
    backgroundColor: '#09f',
    borderRadius: 100,
    justifyContent: 'center',
    width: 40,
    height: 40,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  alignTop: {
    top: 8,
  },
  alignBottom: {
    bottom: 8,
  },
  alignRight: {
    right: 8,
  },
  alignLeft: {
    left: 8,
  },
});
