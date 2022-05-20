import {StackNavigationProp} from '@react-navigation/stack';

export type HomeStackScreen = keyof HomeStackParamList;

export type RootStackParamList = {
  HomeTabsRoot: undefined;
  HomeStack: {screen: HomeStackScreen};
};

export type HomeStackParamList = {
  CitySearchModal: undefined;
  Stay: {place: {cityName: string}};
};

export type HomeTabsParamList = {
  Home: undefined;
  Other: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
export type HomeStackNavigation = StackNavigationProp<HomeStackParamList>;
