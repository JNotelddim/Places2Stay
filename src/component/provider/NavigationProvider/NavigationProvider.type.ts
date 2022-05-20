import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type CitySearchModalParams = {};
export type HomeScreenParams = {};
export type OtherScreenParams = {};
export type StayScreenParams = {city: string};

export type RootStackParamList = {
  HomeTabsRoot: undefined;
  CitySearchModal: undefined;
  Stay: StayScreenParams;
};

export type HomeTabsParamList = {
  Home: HomeScreenParams;
  Other: OtherScreenParams;
};

// Remember, tab screens (Home, Other) don't get params...
export type CitySearchModalProps = StackScreenProps<CitySearchModalParams>;
export type StayScreenProps = StackScreenProps<RootStackParamList, 'Stay'>;
export type RootStackNavigation = StackNavigationProp<RootStackParamList>;
