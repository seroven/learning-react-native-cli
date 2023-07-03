import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Appbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.option}>Counter</Text>
      <Text style={styles.option}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.06,
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#09f'
  },
  option: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})

