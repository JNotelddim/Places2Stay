import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTabsRoot: undefined;
  CitySearchModal: undefined;
  NotificationModal: undefined;
  Account: undefined;
  Stay: {city: string};
};

export type HomeTabsParamList = {
  Home: undefined;
  Search: undefined;
  // Stay: {};
  // Stay: {city: string};
};

// Remember, tab screens (Home, Search, Stay) don't get params...
export type StayScreenProps = StackScreenProps<RootStackParamList, 'Stay'>;
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
