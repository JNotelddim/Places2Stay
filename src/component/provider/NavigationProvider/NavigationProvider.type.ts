import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTabsRoot: undefined;
  NotificationModal: undefined;
  Account: undefined;
  City: {cityId: string};
  Listing: {listingId: string};
  Stay: {city: string};
};

export type HomeTabsParamList = {
  Home: undefined;
  Search: undefined;
  // Stay: {};
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
export type HomeTabsNavigation = BottomTabNavigationProp<HomeTabsParamList>;
