/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Logs} from 'expo';

import {NavigationRoot} from 'component/provider';

Logs.enableExpoCliLogging();

const AppRoot = () => {
  return (
    <NavigationContainer>
      <NavigationRoot />
    </NavigationContainer>
  );
};

export default AppRoot;
