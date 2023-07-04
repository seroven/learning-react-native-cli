import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { AppbarOptionType } from '../types/AppbarTypes'

const options:AppbarOptionType[] = [
  {
    name: 'Counter',
    link: 'counter'
  },
  {
    name: 'Hello',
    link: 'hello'
  }
]

export const Appbar = () => {
  return (
    <View style={styles.container}>
      {
        options.map(o => 
          <TouchableOpacity key={o.name}>
            <Text>{o.name}</Text>
          </TouchableOpacity>
          )
      }
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

