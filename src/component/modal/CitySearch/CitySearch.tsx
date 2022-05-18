import React from 'react';

import {SearchInput, Text, Modal} from 'component/base';
import {CITIES} from 'const';

// import styles from './CitySearch.style';

export interface CitySearchProps {}

const CitySearch: React.FC<CitySearchProps> = () => {
  const [searchVal, setSearchVal] = React.useState('');

  const filteredCites = CITIES.filter(
    ({cityName}) => cityName.includes(searchVal) || searchVal === '',
  );

  return (
    <Modal>
      <SearchInput
        placeholder="Try 'Boston'"
        value={searchVal}
        onChangeText={setSearchVal}
      />

      {filteredCites.map(({cityName}) => (
        <Text key={cityName} variant="body1">
          {cityName}
        </Text>
      ))}
    </Modal>
  );
};

export default CitySearch;
