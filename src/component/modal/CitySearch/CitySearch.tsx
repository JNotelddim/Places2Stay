import React from 'react';
import {ScrollView, View} from 'react-native';

import {CITIES} from 'const';
import {SearchInput, CityLink} from 'component/base';
import {ModalControls} from 'component/partial';

import styles from './CitySearch.style';

export interface CitySearchProps {}

const CitySearch: React.FC<CitySearchProps> = () => {
  const [searchVal, setSearchVal] = React.useState('');

  const filteredCites = CITIES.filter(
    ({cityName}) => cityName.includes(searchVal) || searchVal === '',
  );

  return (
    <View style={styles.cardStyles}>
      <ModalControls />

      <SearchInput
        placeholder="Try 'Boston'"
        value={searchVal}
        onChangeText={setSearchVal}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCites.map(({cityName}) => (
          <CityLink key={cityName} cityName={cityName} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CitySearch;
