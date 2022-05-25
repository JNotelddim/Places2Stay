import {ImageSourcePropType} from 'react-native';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Notification {
  id: string;
  userId: string;
  body: string;
}

export interface City {
  id: string;
  name: string;
  imageSource: ImageSourcePropType;
}

export interface Listing {
  id: string;
  cityId: string;
  userId: string;
  address: string;
  capacity: number;
  allowsDogs: boolean;
}

export interface ListingAvailability {
  id: string;
  listingId: string;
  startDate: Date;
  endDate: Date;
}

export interface Reservation {
  id: string;
  userId: string;
  listingId: string;
  startDate: Date;
  endDate: Date;
}
