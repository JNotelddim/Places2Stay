import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {useMockDb, WhenScreenProps} from 'component/provider';
import {Text} from 'component/base';
import {SearchStep} from 'component/layout';

const When: React.FC<WhenScreenProps> = ({navigation, route}) => {
  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);

  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  // Show options for Calendar or Flexible
  // then depending on which is selected, show a calendar (wix) or
  // options for (weekend, week ,month),
  // and depending on which of those is selected,
  // show a selector between options (if it's May now, show May, June, July for months.)

  // Keep button disabled until sufficient selection is made,
  // When button is enabled, it goes to 'Who' and passes along the built up selection info

  return (
    <SearchStep
      title="When will you be there?"
      cityName={city?.name || 'Error'}>
      <View>
        <Text>When</Text>
        <Button
          onPress={() =>
            navigation.push('Who', {
              ...route.params,
              dates: {
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
              },
            })
          }
          title="Who"
        />
      </View>
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default When;
