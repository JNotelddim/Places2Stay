import React from 'react';
import {Image, View} from 'react-native';

import {Pressable, Text} from 'component/base';
import {CityCardProps} from './CityCard.type';
import styles from './CityCard.style';

const CityCard: React.FC<CityCardProps> = ({cityName, imageSource}) => (
  <Pressable onPress={() => console.log('Go To City Screen')}>
    <View style={styles.wrapper} accessibilityLabel={`Image. ${cityName}.`}>
      <Image style={styles.image} source={imageSource} />
      <Text variant="body1">{cityName}</Text>
    </View>
  </Pressable>
);

export default CityCard;
