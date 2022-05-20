import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Stay, Other, CitySearchModal} from '/component/screen';
import {Icon} from 'component/base';

import {colors} from 'const';
import {ParamListBase, RouteProp} from '@react-navigation/native';

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
      case 'Home':
      default:
        return (
          <Icon name="home" color={focused ? colors.black : colors.slateGrey} />
        );
    }
  },
  tabBarLabel: () => null,
});

const HomeTabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={getTabScreenOptions}>
      <Tabs.Screen
        name="Home"
        component={Home}
        // See Component file for header options
      />
      <Tabs.Screen
        name="Other"
        component={Other}
        options={{header: () => null}}
      />
    </Tabs.Navigator>
  );
};

const NavigationRoot = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="HomeTabsRoot" component={HomeTabsNavigator} />
      <Stack.Screen name="Stay" component={Stay} />
      <Stack.Screen
        name="CitySearchModal"
        component={CitySearchModal}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
