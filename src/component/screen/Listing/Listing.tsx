import React from 'react';
import {Image, View} from 'react-native';

import {IconButton, Text} from 'component/base';
import {useMockDb} from 'component/provider';

import {ListingScreenProps} from './Listing.type';
import styles from './Listing.style';
import {SectionHeader} from 'component/partial';
import {colors} from 'const';

const Listing: React.FC<ListingScreenProps> = ({route, navigation}) => {
  const {listingId} = route.params;
  const mockDb = useMockDb();
  const listing = mockDb.getListingById(listingId);
  const {name, province, country} =
    mockDb.getCityById(listing?.cityId || '') || {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconButton
        name="chevron-left"
        onPress={handleGoBack}
        style={styles.backButton}
        color={colors.black}
        opaque
      />
      {!listing ? (
        <Text>Error, no listing found.</Text>
      ) : (
        <>
          <Image source={listing.imageSource} style={styles.image} />
          <View style={styles.contentWrapper}>
            <SectionHeader
              heading={listing.address}
              style={styles.heading}
              description={`${name}, ${province}, ${country}`}
            />
            <Text>${listing.price} per night.</Text>
            <Text>
              {listing.allowsDogs ? 'Allows dogs.' : 'Does not allow dogs.'}
            </Text>
            <Text>Maximum people: {listing.capacity}.</Text>
          </View>
        </>
      )}
    </View>
  );
};
export default Listing;
