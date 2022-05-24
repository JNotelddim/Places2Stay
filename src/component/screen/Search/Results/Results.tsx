import {Text} from 'component/base';
import {SearchStep} from 'component/layout';
import {useMockDb} from 'component/provider';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ResultsScreenProps} from 'component/provider/NavigationProvider/NavigationProvider.type';
import {PlaceCTA} from 'component/partial';

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
      <Text>{dates}</Text>
      <Text>{occupants}</Text>

      {filteredListings.map(listing => (
        <PlaceCTA {...listing} />
      ))}
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Results;
