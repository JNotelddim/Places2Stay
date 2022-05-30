import * as faker from 'faker';

import {ParamsFromWho} from 'component/screen/Search/Search.type';

import {
  City,
  Listing,
  ListingAvailability,
  Notification,
  Reservation,
  User,
} from 'type/models.type';

import img from 'asset/stock-photo.jpg';
import miami from 'asset/miami.jpg';
import montreal from 'asset/montreal.jpg';
import vancouver from 'asset/vancouver.jpg';
import toronto from 'asset/toronto.jpg';
import newYork from 'asset/new-york.jpg';

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
    address: faker.address.streetAddress(),
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
    const misMatchTotals = {
      wrongCity: 0,
      datesBooked: 0,
      tooManyPeople: 0,
      doesntAllowDogs: 0,
    };

    const filteredListings = listings.filter(listing => {
      if (listing.cityId !== cityId) {
        misMatchTotals.wrongCity += 1;
        return false;
      }

      // nothing to do with the stayType...

      // TODO: logic for aligning dates
      const datesAlign = true;
      if (!datesAlign) {
        misMatchTotals.datesBooked += 1;
        return false;
      }

      const totalOccupants = Object.values({
        ...occupants,
        infants: 0,
        pets: 0,
      }).reduce((prevValue, currentValue) => prevValue + currentValue, 0);

      if (listing.capacity < totalOccupants) {
        misMatchTotals.tooManyPeople += 1;
        return false;
      }

      if (!listing.allowsDogs && occupants && occupants.pets > 0) {
        misMatchTotals.doesntAllowDogs += 1;
        return false;
      }

      const doFiltersAlignWithListing =
        // If the city doesn't match
        listing.cityId == cityId &&
        // Or the dates don't align
        datesAlign &&
        // Or the occupants outnumber the capacity
        listing.capacity >= totalOccupants &&
        // Or the listing doesn't allow dogs but occupants want to bring them
        (!occupants || occupants.pets === 0 || listing.allowsDogs);
      // then return value will be false, (ie, doesn't match) -- otherwise true :)
      return doFiltersAlignWithListing;
    });

    console.log({misMatchTotals, totalListings: listings.length});
    return filteredListings;
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

export const getFakePlace = () => {
  return {
    id: faker.datatype.uuid(),
    imageSource: img, // require(faker.image.city())
    accessibilityLabel: 'Table in restaurant.',
    label: `From $${faker.datatype.number(1100)}`,
    address: `${faker.address.secondaryAddress()} - ${faker.address.streetAddress()}`,
    location: `${faker.address.city()}, ${faker.address.state()}`,
    placeName: faker.name.jobArea(),
  };
};
