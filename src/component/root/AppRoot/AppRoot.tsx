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
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Browse, Stay, Other} from '/component/screen';
import {Icon} from 'component/base';
import ModalProvider from 'component/provider/ModalProvider';

import {colors} from 'const';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

// TODO: move
const getTabScreenOptions = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => ({
  tabBarStyle: {
    backgroundColor: colors.extraPaleYellow,
    paddingTop: 16,
  },
  tabBarIcon: ({focused}: {focused: boolean}) => {
    switch (route.name) {
      case 'Other':
        return (
          <Icon
            name="calendar"
            color={focused ? colors.black : colors.slateGrey}
          />
        );
      case 'Browse':
      default:
        return (
          <Icon name="home" color={focused ? colors.black : colors.slateGrey} />
        );
    }
  },
  header: () => null,
  tabBarLabel: () => null,
});

// TODO: move
const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={getTabScreenOptions}>
      <Tabs.Screen name="Browse" component={Browse} />
      <Tabs.Screen name="Other" component={Other} />
    </Tabs.Navigator>
  );
};

const AppRoot = () => {
  return (
    <ModalProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Home" component={TabsNavigator} />
          <Stack.Screen name="Stay" component={Stay} />
          {/* <Stack.Screen name="City" component={City} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ModalProvider>
  );
};

export default AppRoot;
