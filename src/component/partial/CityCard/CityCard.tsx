import React from 'react';
import {Image, View} from 'react-native';

import {Pressable, Text} from 'component/base';
import {CityCardProps} from './CityCard.type';
import styles from './CityCard.style';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigation} from 'component/provider';

const CityCard: React.FC<CityCardProps> = city => {
  const navigation = useNavigation<RootStackNavigation>();
  const {name, id, imageSource} = city;
  return (
    <Pressable onPress={() => navigation.navigate('City', {cityId: id})}>
      <View style={styles.wrapper} accessibilityLabel={`Image. ${name}.`}>
        <Image style={styles.image} source={imageSource} />
        <Text variant="body1">{name}</Text>
      </View>
    </Pressable>
  );
};

export default CityCard;
