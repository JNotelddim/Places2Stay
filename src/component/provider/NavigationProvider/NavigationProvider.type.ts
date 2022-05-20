import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  HomeTabsRoot: undefined;
  CitySearchModal: undefined;
  Stay: {place: {cityName: string}};
};

export type HomeTabsParamList = {
  Home: undefined;
  Other: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
