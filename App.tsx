import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import {Appbar} from './src/components/Appbar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabOption = (label:string):BottomTabNavigationOptions  => {  
  return {
    headerShown: false,
    tabBarLabel: label,
  }
} 

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen options={tabOption('Counter')} name="counter" component={CounterScreen} />
          <Tab.Screen options={tabOption('Hello')} name="hello" component={HelloWorldScreen} />
        </Tab.Navigator>
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
