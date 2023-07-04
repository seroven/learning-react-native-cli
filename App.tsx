import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BottomTabNavigation} from './src/components/BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
      {/* <Appbar/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
