import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigator/DrawerNavigator"
import StackNavigator from "./navigator/StackNavigator";
import LoginScreen from "./Screens/LoginScreen"

export default function App() {
  return (
      <StackNavigator />
  );
}
