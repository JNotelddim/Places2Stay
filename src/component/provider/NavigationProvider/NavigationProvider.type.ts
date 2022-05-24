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

export type DateSelection = {
  startDate: string; // Date.toISODateString();
  endDate: string; // Date.toISODateString();
};
export type OccupantsSelection = {
  adults: number;
  children: number;
  infants: number;
  pets: number;
};

export interface ParamsFromWhere {
  cityId: string;
}

export interface ParamsFromWhat extends ParamsFromWhere {
  stayType?: 'Place' | 'Monthly' | 'Experience';
}

export interface ParamsFromWhen extends ParamsFromWhat {
  dates?: DateSelection;
}

export interface ParamsFromWho extends ParamsFromWhen {
  occupants?: OccupantsSelection;
}

export type SearchStackParamList = {
  Where: undefined;
  What: ParamsFromWhere;
  When: ParamsFromWhat;
  Who: ParamsFromWhen;
  Results: ParamsFromWho;
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

// Search
export type SearchStackNavigation = StackNavigationProp<SearchStackParamList>;
export type WhereScreenProps = StackScreenProps<SearchStackParamList, 'Where'>;
export type WhatScreenProps = StackScreenProps<SearchStackParamList, 'What'>;
export type WhenScreenProps = StackScreenProps<SearchStackParamList, 'When'>;
export type WhoScreenProps = StackScreenProps<SearchStackParamList, 'Who'>;
export type ResultsScreenProps = StackScreenProps<
  SearchStackParamList,
  'Results'
>;
