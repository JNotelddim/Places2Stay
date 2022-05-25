import React from 'react';
import {StyleSheet} from 'react-native';

import {getFakePlace} from 'utils';
import {Text} from 'component/base';
import {PlaceCTA} from 'component/partial';
import {SearchStep} from 'component/layout';
import {ResultsScreenProps, useMockDb} from 'component/provider';

const Results: React.FC<ResultsScreenProps> = ({route}) => {
  const mockDb = useMockDb();
  const {cityId, stayType, dates, occupants} = route.params;
  const city = mockDb.getCityById(cityId);
  const filteredListings = mockDb.getFilteredListings({
    cityId,
    stayType,
    dates,
    occupants,
  });

  return (
    <SearchStep title="Results" cityName={city?.name || 'Error'}>
      <Text>Results</Text>
      <Text>{cityId}</Text>
      <Text>{stayType}</Text>
      <Text>
        {dates?.startDate} {dates?.endDate}
      </Text>
      <Text>
        {occupants?.adults} {occupants?.children} {occupants?.infants}{' '}
        {occupants?.pets}
      </Text>

      {filteredListings.length ? (
        filteredListings.map(listing => (
          <PlaceCTA key={listing.id} {...getFakePlace()} {...listing} />
        ))
      ) : (
        <Text variant="heading2">
          No results found which can accommodate your search filters.
        </Text>
      )}
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Results;
