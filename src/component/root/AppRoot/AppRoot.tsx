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
// import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorImage from 'react-native-vector-image';

import {Home, Stay} from '/component/screen';

const {Navigator, Screen} = createBottomTabNavigator();

const AppRoot = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {backgroundColor: '#FFF8E8'},
          tabBarIcon: ({focused}) => {
            console.log({route, focused});
            return <VectorImage source={require('asset/home.svg')} />;
          },
        })}>
        <Screen name="Home" component={Home} />
        <Screen name="Stay" component={Stay} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoot;
