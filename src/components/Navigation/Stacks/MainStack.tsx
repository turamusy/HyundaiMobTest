import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {INavigation} from '../../../interface/INavigation';
import {MainRoutes} from '../NavigationTypes';
import {List} from '../../../screens/List/List';
import R from '../../../resources/R';
import {Details} from '../../../screens/Details/Details';

const Stack = createStackNavigator<any>();
export const MainStack: React.FC<INavigation<MainRoutes>> = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Main'}
      screenOptions={{
        headerTitleAlign: 'center',
        ...TransitionPresets.SlideFromRightIOS,
        headerStyle: {},
        headerTintColor: R.colors.prussianBlue,
      }}>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
