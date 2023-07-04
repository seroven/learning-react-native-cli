import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  IconDefinition,
  faDiceOne,
  faHandshake,
  faGamepad
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NavigationContainer} from '@react-navigation/native';
import {CounterScreen} from '../screens/CounterScreen';
import {HelloWorldScreen} from '../screens/HelloWorldScreen';
import { ApiListScreen } from '../screens/ApiModule/ApiListScreen';

const genTabOption = (
  name: string,
  icon: IconDefinition,
): BottomTabNavigationOptions => {
  return {
    headerShown: false,
    tabBarLabel: name,
    tabBarIcon: ({color, size}) => (
      <FontAwesomeIcon color={color} icon={icon} />
    ),
  };
};

export const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={genTabOption('Counter', faDiceOne)}
        name="counter"
        component={CounterScreen}
      />
      <Tab.Screen
        options={genTabOption('Hello', faHandshake)}
        name="hello"
        component={HelloWorldScreen}
      />
      <Tab.Screen
        options={genTabOption('Api', faGamepad)}
        name="api"
        component={ApiListScreen}
      />
    </Tab.Navigator>
  );
};
