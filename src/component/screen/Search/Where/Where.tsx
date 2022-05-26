import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {CityLink, SearchInput} from 'component/base';
import {SectionHeader} from 'component/partial';
import {useMockDb} from 'component/provider';

import styles from './Where.style';

import {WhereScreenProps} from './Where.type';

const Where: React.FC<WhereScreenProps> = ({navigation}) => {
  const [searchVal, setWhereModalVal] = React.useState('');
  const {cities} = useMockDb();

  const filteredCites = cities.filter(
    ({name}) => name.includes(searchVal) || searchVal === '',
  );

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

export default Where;
