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
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {Logs} from 'expo';

import {AuthRoot} from 'component/root';
import {RootStackParamList, AuthProvider} from 'component/provider';

Logs.enableExpoCliLogging();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['places2stay://', 'https://places2stay.com'],
  config: {
    screens: {
      HomeTabsRoot: {
        screens: {
          Home: 'home',
          Search: 'search',
        },
      },
      Account: 'account',
    },
  },
};

const AppRoot = () => {
  return (
    <NavigationContainer linking={linking}>
      <AuthProvider>
        <AuthRoot />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default AppRoot;
