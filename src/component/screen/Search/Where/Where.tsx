import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {colors, spacing} from 'const';
import {CityLink, SearchInput} from 'component/base';
import {SectionHeader} from 'component/partial';
import {useMockDb, WhereScreenProps} from 'component/provider';

// TODO: why is it suddenly acting like it's using a safeAreaView? is this cause of the Stack Navigator?

const Where: React.FC<WhereScreenProps> = ({navigation}) => {
  const [searchVal, setWhereModalVal] = React.useState('');
  const {cities} = useMockDb();

  const filteredCites = cities.filter(
    ({name}) => name.includes(searchVal) || searchVal === '',
  );

  // TODO: create a layout component for wrapping all these Search Stack screens with 'Back' button and such

  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Try 'Boston'"
        value={searchVal}
        onChangeText={setWhereModalVal}
      />

      <SectionHeader heading="Getaways Near You" style={styles.header} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCites.map(({id, name}) => (
          <CityLink
            key={name}
            cityName={name}
            onPress={() => navigation.push('What', {cityId: id})}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleYellow,
    height: '100%',
    paddingTop: spacing.whitespace.unsafeScreenTop,
    paddingHorizontal: spacing.whitespace.screenHorizontal,
  },
  header: {
    marginBottom: spacing.whitespace.large,
  },
});

export default Where;
