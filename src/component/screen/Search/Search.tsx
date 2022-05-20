import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CITIES, colors, spacing} from 'const';
import {CityLink, SearchInput} from 'component/base';
import {ScrollView} from 'react-native-gesture-handler';
import {SectionHeader} from 'component/partial';

const Search: React.FC = () => {
  const [searchVal, setSearchModalVal] = React.useState('');

  const filteredCites = CITIES.filter(
    ({cityName}) => cityName.includes(searchVal) || searchVal === '',
  );
  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Try 'Boston'"
        value={searchVal}
        onChangeText={setSearchModalVal}
      />

      <SectionHeader heading="Getaways Near You" style={styles.header} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCites.map(({cityName}) => (
          <CityLink key={cityName} cityName={cityName} />
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

export default Search;
