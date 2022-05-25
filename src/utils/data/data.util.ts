import * as faker from 'faker';
import {ParamsFromWho} from 'component/provider/NavigationProvider/NavigationProvider.type';
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
    return listings.filter(listing => {
      if (listing.cityId !== cityId) {
        console.log(
          `listing cityID ${listing.cityId} does not match city Id ${cityId}`,
        );
        return false;
      }

      // nothing to do with the stayType...
      // TODO: update

      // TODO: logic for aligning dates
      const datesAlign = true;
      if (!datesAlign) {
        console.log('listing dates do not match dates');
        return false;
      }

      const totalOccupants = Object.values({
        ...occupants,
        infants: 0,
        pets: 0,
      }).reduce((prevValue, currentValue) => prevValue + currentValue, 0);

      if (listing.capacity < totalOccupants) {
        console.log(
          `listing capacity ${listing.capacity} does not allow for ${totalOccupants} occupants`,
        );
        return false;
      }

      if (!listing.allowsDogs && occupants && occupants.pets > 0) {
        console.log(
          `listing does not allow dogs ${listing.allowsDogs} ${occupants.pets}`,
        );
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
