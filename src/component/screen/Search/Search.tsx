import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {colors, spacing} from 'const';
import {CityLink, SearchInput} from 'component/base';
import {SectionHeader} from 'component/partial';
import {useMockDb} from 'component/provider';

//TODO: nest in 'SearchStack'

const Search: React.FC = () => {
  const [searchVal, setSearchModalVal] = React.useState('');
  const {cities} = useMockDb();

  const filteredCites = cities.filter(
    ({name}) => name.includes(searchVal) || searchVal === '',
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
        {filteredCites.map(({name}) => (
          <CityLink key={name} cityName={name} />
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
