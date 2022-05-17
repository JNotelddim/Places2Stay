import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

import {Text} from 'component/base';

export interface CityCardProps {
  cityName: string;
  imageSource: ImageSourcePropType;
}

const CityCard: React.FC<CityCardProps> = ({cityName, imageSource}) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={imageSource} />
      <Text>{cityName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 20,
  },
  image: {
    height: 160,
    width: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default CityCard;
