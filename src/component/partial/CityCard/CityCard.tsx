import React from 'react';
import {Image, View} from 'react-native';

import {Text} from 'component/base';
import {CityCardProps} from './CityCard.type';
import styles from './CityCard.style';

const CityCard: React.FC<CityCardProps> = ({cityName, imageSource}) => (
  <View style={styles.wrapper} accessibilityLabel={`Image. ${cityName}.`}>
    <Image style={styles.image} source={imageSource} />
    <Text variant="body1">{cityName}</Text>
  </View>
);

export default CityCard;
