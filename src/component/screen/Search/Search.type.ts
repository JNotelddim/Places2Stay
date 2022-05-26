import {StackNavigationProp} from '@react-navigation/stack';

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
export type SearchStackNavigation = StackNavigationProp<SearchStackParamList>;
