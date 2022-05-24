import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {useMockDb, WhoScreenProps} from 'component/provider';
import {Text} from 'component/base';
import {SearchStep} from 'component/layout';

const Who: React.FC<WhoScreenProps> = ({navigation, route}) => {
  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);
  return (
    <SearchStep title="Who's going?" cityName={city?.name || 'Error'}>
      <View>
        <Text>Who</Text>
        <Button
          onPress={() =>
            navigation.push('Results', {
              ...route.params,
              occupants: {
                adults: 3,
                kids: 2,
                dogs: 4,
              },
            })
          }
          title="Results"
        />
      </View>
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Who;
