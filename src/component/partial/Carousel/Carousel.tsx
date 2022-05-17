import React from 'react';
import {FlatList, StyleProp, ViewStyle} from 'react-native';

import {CityCardProps} from '../CityCard/CityCard';

export interface CarouselProps {
  items: Array<CityCardProps>;
  component: React.FC<CityCardProps>;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  component: Component,
  style,
  contentContainerStyle,
}) => {
  return (
    <FlatList
      style={style}
      contentContainerStyle={contentContainerStyle}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={items}
      renderItem={({item}) => <Component {...(item as any)} />}
    />
  );
};

export default Carousel;
