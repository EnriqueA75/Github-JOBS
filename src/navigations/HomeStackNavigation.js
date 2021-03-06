import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RouteMap } from '../constants/RouteMap';
import { HomeScreen } from '../screens/home/HomeScreen';
import { AppbarNavigation } from '../components/header';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: AppbarNavigation,
      }}
    >
      <HomeStack.Screen
        name={RouteMap.ButtomNavigation.home}
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};
