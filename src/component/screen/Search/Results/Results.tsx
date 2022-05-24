import {Text} from 'component/base';
import {SearchStep} from 'component/layout';
import {useMockDb} from 'component/provider';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ResultsScreenProps} from 'component/provider/NavigationProvider/NavigationProvider.type';

const Results: React.FC<ResultsScreenProps> = ({route}) => {
  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);

  return (
    <SearchStep title="Results" cityName={city?.name || 'Error'}>
      <Text>Results</Text>
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Results;
