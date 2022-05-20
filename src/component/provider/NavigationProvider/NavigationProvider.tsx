import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {ModalProvider} from 'component/provider/';
import {Home, Stay, Other, RootModal} from '/component/screen';
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
  header: () => null,
  tabBarLabel: () => null,
});

const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={getTabScreenOptions}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Other" component={Other} />
    </Tabs.Navigator>
  );
};

const NavigationRoot = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Stay" component={Stay} />
      <Stack.Screen name="HomeRoot" component={TabsNavigator} />
      <Stack.Screen
        name="RootModal"
        component={RootModal}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
};

export default NavigationRoot;
