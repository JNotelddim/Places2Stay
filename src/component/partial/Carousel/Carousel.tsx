import React from 'react';
import {FlatList} from 'react-native';

import {CityCardProps} from '../CityCard/CityCard';

export interface CarouselProps {
  items: Array<CityCardProps>;
  component: React.FC<CityCardProps>;
}

const Carousel: React.FC<CarouselProps> = ({items, component: Component}) => {
  return (
    <FlatList
      horizontal
      data={items}
      renderItem={({item}) => <Component {...(item as any)} />}
    />
  );
};

export default Carousel;
