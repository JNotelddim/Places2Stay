import React from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {pluralize} from 'utils';
import {colors} from 'const';
import {useMockDb} from 'component/provider';
import {IconButton, Text} from 'component/base';
import {ListingCard, SectionHeader} from 'component/partial';

import {CityScreenProps} from './City.type';
import styles from './City.styles';

const City: React.FC<CityScreenProps> = ({route, navigation}) => {
  const {cityId} = route.params;
  const mockDb = useMockDb();
  const city = mockDb.getCityById(cityId);
  const listings = mockDb.getListingsByCity(cityId);

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
      {!city ? (
        <Text>Error, no city found.</Text>
      ) : (
        <>
          <Image source={city.imageSource} style={styles.image} />
          <View style={styles.contentWrapper}>
            <SectionHeader
              heading={city.name}
              style={styles.heading}
              description={`${listings.length} ${pluralize(
                'listing',
                listings.length,
              )} found in ${city.name}.`}
            />
            <ScrollView style={styles.listContainer}>
              {listings.map(listing => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

export default City;
