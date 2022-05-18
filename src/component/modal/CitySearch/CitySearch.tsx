import React from 'react';

import {SearchInput, Modal, CityLink} from 'component/base';
import {CITIES} from 'const';

import styles from './CitySearch.style';
import {ScrollView} from 'react-native';

export interface CitySearchProps {}

const CitySearch: React.FC<CitySearchProps> = () => {
  const [searchVal, setSearchVal] = React.useState('');

  const filteredCites = CITIES.filter(
    ({cityName}) => cityName.includes(searchVal) || searchVal === '',
  );

  return (
    <Modal cardStyles={styles.cardStyles}>
      <SearchInput
        placeholder="Try 'Boston'"
        value={searchVal}
        onChangeText={setSearchVal}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCites.map(({cityName}) => (
          <CityLink>{cityName}</CityLink>
        ))}
      </ScrollView>
    </Modal>
  );
};

export default CitySearch;
