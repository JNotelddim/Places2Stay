import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Browse, Stay, Other} from '/component/screen';
import {Icon} from 'component/base';

import {colors} from 'const';
import {ParamListBase, RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Stay: {place: {cityName: string}};
};

export type HomeTabsParamList = {
  Browse: undefined;
  Other: undefined;
};

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

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

const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={getTabScreenOptions}>
      <Tabs.Screen name="Browse" component={Browse} />
      <Tabs.Screen name="Other" component={Other} />
    </Tabs.Navigator>
  );
};

const NavigationRoot = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={TabsNavigator} />
      <Stack.Screen name="Stay" component={Stay} />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
