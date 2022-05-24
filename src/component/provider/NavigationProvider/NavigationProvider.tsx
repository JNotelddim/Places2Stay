import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import {
  Home,
  Stay,
  Search,
  NotificationModal,
  Account,
  City,
  Listing,
} from '/component/screen';

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
  header: () => null,
  tabBarLabel: () => null,
  tabBarIcon: ({focused}: {focused: boolean}) => {
    switch (route.name) {
      case 'Search':
        return (
          <Icon
            name="search"
            size={24}
            color={focused ? colors.black : colors.slateGrey}
          />
        );
      case 'Stay':
        return (
          <Icon
            name="map-pin"
            size={24}
            color={focused ? colors.black : colors.slateGrey}
          />
        );
      case 'Home':
      default:
        return (
          <Icon
            name="home"
            size={24}
            color={focused ? colors.black : colors.slateGrey}
          />
        );
    }
  },
});

const HomeTabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={getTabScreenOptions}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
      {/* <Tabs.Screen name="Stay" component={Stay} /> */}
    </Tabs.Navigator>
  );
};

const NavigationRoot = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="HomeTabsRoot" component={HomeTabsNavigator} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Stay" component={Stay} />
      <Stack.Screen name="City" component={City} />
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen
        name="NotificationModal"
        component={NotificationModal}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
