import React from 'react';
import {View} from 'react-native';

import {Pressable, Text} from 'component/base';
import {ImageCard} from 'component/partial';

import {ListingCardProps} from './ListingCard.type';
import styles from './ListingCard.style';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigation, useMockDb} from 'component/provider';

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  imageSource,
  price,
  address,
  cityId,
  style,
}) => {
  const navigation = useNavigation<RootStackNavigation>();
  const mockDb = useMockDb();
  const {province, country} = mockDb.getCityById(cityId) || {};

  return (
    <Pressable onPress={() => navigation.push('Listing', {listingId: id})}>
      <View style={[styles.container, style]}>
        <ImageCard imageSource={imageSource} label={`From ${price}`} />

        <Text variant="body1"> {address} </Text>

        <Text variant="body1" style={styles.locationText}>
          {province}, {country}
        </Text>
      </View>
    </Pressable>
  );
};

export default ListingCard;
