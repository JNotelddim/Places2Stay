import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {colors, spacing} from 'const';
import {getFakePlace, pluralize} from 'utils';
import {Text} from 'component/base';
import {PlaceCTA} from 'component/partial';
import {SearchStep} from 'component/layout';
import {ResultsScreenProps, useMockDb} from 'component/provider';

const Results: React.FC<ResultsScreenProps> = ({route}) => {
  const mockDb = useMockDb();
  const {cityId, stayType, dates, occupants} = route.params;
  const city = mockDb.getCityById(cityId);
  const cityListings = mockDb.getListingsByCity(cityId);
  const filteredListings = mockDb.getFilteredListings({
    cityId,
    stayType,
    dates,
    occupants,
  });

  return (
    <SearchStep title="Results" cityName={city?.name || 'Error'}>
      <Text variant="body1" color={colors.slateGrey} style={styles.resultsText}>
        {filteredListings.length}{' '}
        {pluralize('listing', filteredListings.length)} out of{' '}
        {cityListings.length} in {city?.name} matched what you're looking for.
      </Text>

      {filteredListings.length && (
        <ScrollView>
          {filteredListings.map(listing => (
            <PlaceCTA key={listing.id} {...getFakePlace()} {...listing} />
          ))}
        </ScrollView>
      )}
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  resultsText: {
    marginTop: spacing.whitespace.large,
    marginBottom: spacing.whitespace.xlarge,
    textAlign: 'center',
  },
});

export default Results;
