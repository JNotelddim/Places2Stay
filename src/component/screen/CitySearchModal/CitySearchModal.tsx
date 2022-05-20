import React from 'react';
import {ScrollView, View} from 'react-native';

import {CITIES} from 'const';
import {SearchInput, CityLink} from 'component/base';
import {ModalControls} from 'component/partial';

import styles from './CitySearchModal.style';

export interface CitySearchModalProps {}

const CitySearchModal: React.FC<CitySearchModalProps> = () => {
  const [searchVal, setSearchModalVal] = React.useState('');

  const filteredCites = CITIES.filter(
    ({cityName}) => cityName.includes(searchVal) || searchVal === '',
  );

  return (
    <View style={styles.cardStyles}>
      <ModalControls />

      <View style={styles.content}>
        <SearchInput
          placeholder="Try 'Boston'"
          value={searchVal}
          onChangeText={setSearchModalVal}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredCites.map(({cityName}) => (
            <CityLink key={cityName} cityName={cityName} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default CitySearchModal;
