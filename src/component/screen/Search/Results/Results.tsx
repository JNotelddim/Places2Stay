import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {colors} from 'const';
import {pluralize} from 'utils';
import {Text} from 'component/base';
import {ListingCard} from 'component/partial';
import {SearchStep} from 'component/layout';
import {useMockDb} from 'component/provider';

import styles from './Results.style';

import {ResultsScreenProps} from './Results.type';

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
      {!city ? (
        <Text>Error, invalid cityId.</Text>
      ) : (
        <>
          <Text
            variant="body1"
            color={colors.slateGrey}
            style={styles.resultsText}>
            {filteredListings.length}{' '}
            {pluralize('listing', filteredListings.length)} out of{' '}
            {cityListings.length} in {city?.name} matched what you're looking
            for.
          </Text>

          {filteredListings.length && (
            <ScrollView>
              {filteredListings.map(listing => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </ScrollView>
          )}
        </>
      )}
    </SearchStep>
  );
};

export default Results;
