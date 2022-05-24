import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTabsRoot: undefined;
  CitySearchModal: undefined;
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
// Remember, tab screens (Home, Search, Stay) don't get params...
export type StayScreenProps = StackScreenProps<RootStackParamList, 'Stay'>;
export type CityScreenProps = StackScreenProps<RootStackParamList, 'City'>;
export type ListingScreenProps = StackScreenProps<
  RootStackParamList,
  'Listing'
>;
