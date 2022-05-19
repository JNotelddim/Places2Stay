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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Stay} from '/component/screen';
import {Icon} from 'component/base';
import ModalProvider from 'component/provider/ModalProvider';
import {colors} from 'const';

const {Navigator, Screen} = createBottomTabNavigator();

const AppRoot = () => {
  return (
    <ModalProvider>
      <NavigationContainer>
        <Navigator
          screenOptions={({route}) => ({
            tabBarStyle: {
              backgroundColor: colors.extraPaleYellow,
              paddingTop: 16,
            },
            tabBarIcon: ({focused}) => {
              switch (route.name) {
                case 'Stay':
                  return (
                    <Icon
                      name="calendar"
                      color={focused ? colors.black : colors.slateGrey}
                    />
                  );
                case 'Home':
                default:
                  return (
                    <Icon
                      name="home"
                      color={focused ? colors.black : colors.slateGrey}
                    />
                  );
              }
            },
            tabBarLabel: () => null,
          })}>
          <Screen name="Home" component={Home} />
          <Screen name="Stay" component={Stay} />
        </Navigator>
      </NavigationContainer>
    </ModalProvider>
  );
};

export default AppRoot;
