import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Text} from 'component/base';
import {useMockDb} from 'component/provider';

import {ListingScreenProps} from './Listing.type';

const Listing: React.FC<ListingScreenProps> = ({route}) => {
  const {listingId} = route.params;
  const mockDb = useMockDb();
  const listing = mockDb.getListingById(listingId);
  if (!listing) {
    return <Text> Error, no listing found. </Text>;
  }

  return (
    <View style={styles.container}>
      <Text>{listing.address} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Listing;
