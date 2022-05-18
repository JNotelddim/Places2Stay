import React from 'react';
import {FlatList} from 'react-native';

import {CarouselProps} from './Carousel.type';

const Carousel: React.FC<CarouselProps> = ({
  items,
  component: Component,
  style,
  contentContainerStyle,
}) => (
  <FlatList
    accessible
    style={style}
    contentContainerStyle={contentContainerStyle}
    horizontal
    showsHorizontalScrollIndicator={false}
    data={items}
    renderItem={({item}) => <Component {...(item as any)} />}
  />
);

export default Carousel;
