import * as faker from 'faker';
import {ImageSourcePropType} from 'react-native';

import miami from 'asset/miami.jpg';
import montreal from 'asset/montreal.jpg';
import vancouver from 'asset/vancouver.jpg';
import toronto from 'asset/toronto.jpg';
import newYork from 'asset/new-york.jpg';
import {ParamsFromWho} from 'component/provider/NavigationProvider/NavigationProvider.type';

// TODO: move all this to utils?

// TODO: move types to src/types?
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

const CITY_IMAGES = [miami, montreal, vancouver, toronto, newYork];

const getRandomNumber = (max = 100) => {
  return Math.round(Math.random() * max);
};

const getRandomExistingItem = <T>(array: Array<T>): T => {
  const index = getRandomNumber(array.length - 1);
  return array[index];
};

export const initMockDb = () => {
  console.log('[MockDb] Initializing Mock Database');
  const users: User[] = new Array(10).fill(undefined).map(() => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }));

  const currentUser: User = getRandomExistingItem(users);

  const thisUsersNotifications: Notification[] = new Array(getRandomNumber(15))
    .fill(undefined)
    .map(() => ({
      id: faker.datatype.uuid(),
      userId: currentUser.id,
      body: faker.random.words(getRandomNumber(30)),
    }));

  const cities: City[] = new Array(25).fill(undefined).map((v, index) => ({
    id: faker.datatype.uuid(),
    name: faker.address.city(),
    imageSource: CITY_IMAGES[index % 4],
  }));

  const listings: Listing[] = new Array(40).fill(undefined).map(() => ({
    id: faker.datatype.uuid(),
    cityId: getRandomExistingItem(cities).id,
    userId: getRandomExistingItem(users).id,
    address: '',
    capacity: getRandomNumber(24),
    allowsDogs: faker.datatype.boolean(),
  }));

  const listingAvailabilities: ListingAvailability[] = new Array(100)
    .fill(undefined)
    .map(() => {
      const startDate = faker.date.future();
      const endDate = faker.date.future(1, startDate);

      return {
        id: faker.datatype.uuid(),
        listingId: getRandomExistingItem(listings).id,
        startDate,
        endDate,
      };
    });

  const thisUsersReservations: Reservation[] = new Array(3)
    .fill(undefined)
    .map(() => {
      const startDate = faker.date.future();
      const endDate = faker.date.future(1, startDate);
      return {
        id: faker.datatype.uuid(),
        userId: getRandomExistingItem(users).id,
        listingId: getRandomExistingItem(listings).id,
        startDate,
        endDate,
      };
    });

  const getListingsByCity = (cityId: string) => {
    return listings.filter(listing => listing.cityId === cityId);
  };

  const getListingAvailabilities = (listingId: string) => {
    return listingAvailabilities.filter(
      listingAvailability => listingAvailability.listingId === listingId,
    );
  };

  const getCityById = (cityId: string) => {
    return cities.find(city => city.id === cityId);
  };
  const getListingById = (listingId: string) => {
    return listings.find(listing => listing.id === listingId);
  };

  const getFilteredListings = ({
    cityId,
    // stayType,
    // dates,
    occupants,
  }: ParamsFromWho) => {
    return listings.filter(listing => {
      if (listing.cityId !== cityId) {
        return false;
      }

      // nothing to do with the stayType...
      // TODO: update

      // TODO: logic for aligning dates
      const datesAlign = true;
      if (!datesAlign) {
        return false;
      }

      const totalOccupants = Object.values({
        ...occupants,
        infants: 0,
        pets: 0,
      }).reduce((prevValue, currentValue) => prevValue + currentValue, 0);

      if (listing.capacity >= totalOccupants) {
        return false;
      }

      if (!listing.allowsDogs && occupants && occupants.pets > 0) {
        return false;
      }

      return true;
    });
  };

  return {
    user: currentUser,
    notifications: thisUsersNotifications,
    reservations: thisUsersReservations,
    cities,
    listings,
    listingAvailabilities,
    getListingsByCity,
    getListingAvailabilities,
    getFilteredListings,
    getCityById,
    getListingById,
  };
};
