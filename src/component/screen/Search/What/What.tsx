import React from 'react';

import {Text} from 'component/base';
import {SearchStep} from 'component/layout';
import {WhatCard} from 'component/partial';
import {useMockDb} from 'component/provider';

import {WhatScreenProps} from './What.type';

const What: React.FC<WhatScreenProps> = ({navigation, route}) => {
  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);

  return (
    <SearchStep
      title="What are you looking for?"
      cityName={city?.name || 'Error'}>
      {city ? (
        <>
          <WhatCard
            title="Find a place to stay"
            description="description"
            onPress={() =>
              navigation.push('When', {...route.params, stayType: 'Place'})
            }
            iconName="map"
          />

          <WhatCard
            title="Find a monthly stay"
            description="description"
            onPress={() =>
              navigation.push('When', {...route.params, stayType: 'Monthly'})
            }
            iconName="home"
          />

          <WhatCard
            title="Find an experience"
            description="description"
            onPress={() =>
              navigation.push('When', {...route.params, stayType: 'Experience'})
            }
            iconName="sun"
          />
        </>
      ) : (
        <Text> Error, invalid city Id </Text>
      )}
    </SearchStep>
  );
};

export default What;
