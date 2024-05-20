import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {FirstScreen, SecundScreen, ThirdScreen} from '../screens/SignUp';
import {Presentation} from '../screens/Presentation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Home'} component={Home} />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Presentation'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Presentation'} component={Presentation} />
      <Stack.Screen name={'FirstScreen'} component={FirstScreen} />
      <Stack.Screen name={'SecundScreen'} component={SecundScreen} />
      <Stack.Screen name={'ThirdScreen'} component={ThirdScreen} />
    </Stack.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};
