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
  SignIn,
} from '/component/screen';

import {colors} from 'const';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: colors.extraPaleYellow,
          paddingTop: 16,
        },
        header: () => null,
        tabBarLabel: () => null,
      })}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={24}
              color={focused ? colors.black : colors.slateGrey}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="search"
              size={24}
              color={focused ? colors.black : colors.slateGrey}
            />
          ),
        }}
      />
      {/* <Tabs.Screen name="Stay" component={Stay} /> */}
    </Tabs.Navigator>
  );
};

export const UnauthenticatedRoot = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
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
