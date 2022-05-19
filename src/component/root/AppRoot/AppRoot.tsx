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

import {ModalProvider, NavigationRoot} from 'component/provider/';

const AppRoot = () => {
  return (
    <NavigationContainer>
      {/* Modal Provider must be within the NavigationContainer AND must wrap all screens. */}
      <ModalProvider>
        <NavigationRoot />
      </ModalProvider>
    </NavigationContainer>
  );
};

export default AppRoot;
