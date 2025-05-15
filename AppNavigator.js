// navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ManageRoutineScreen from '../screens/ManageRoutineScreen';
import AdminScreen from '../screens/AdminScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// The bottom‐tab navigator for logged-in users
function MainTabs() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Manage" component={ManageRoutineScreen} />
      <Tabs.Screen name="Admin" component={AdminScreen} />
      <Tabs.Screen name="Logout" component={LogoutScreen} />
    </Tabs.Navigator>
  );
}

// The root stack: first Login, then MainTabs
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  );
}