import * as faker from 'faker';

import miami from 'asset/miami.jpg';
import montreal from 'asset/montreal.jpg';
import vancouver from 'asset/vancouver.jpg';
import toronto from 'asset/toronto.jpg';
import newYork from 'asset/new-york.jpg';

export const CITY_IMAGES = [miami, montreal, vancouver, toronto, newYork];

export const CITIES = new Array(25).fill(undefined).map((v, index) => ({
  cityName: faker.address.city(),
  imageSource: CITY_IMAGES[index % 4],
}));
