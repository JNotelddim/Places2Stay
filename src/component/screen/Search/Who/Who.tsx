import React from 'react';

import {SearchStep} from 'component/layout';
import {CounterRow} from 'component/partial';
import {useMockDb} from 'component/provider';

import styles from './Who.style';

import {OccupantsSelection} from '../Search.type';
import {WhoScreenProps} from './Who.type';
import {Text} from 'component/base';

const Who: React.FC<WhoScreenProps> = ({navigation, route}) => {
  const mockDb = useMockDb();
  const city = mockDb.getCityById(route.params.cityId);
  const [occupancy, setOccupancy] = React.useState<OccupantsSelection>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleSkipPress = () => {
    navigation.push('Results', route.params);
  };

  const handleNextPress = () =>
    navigation.push('Results', {
      ...route.params,
      occupants: occupancy,
    });

  return (
    <SearchStep
      title="Who's going?"
      cityName={city?.name || 'Error'}
      showNext
      showSkip
      onNextPress={handleNextPress}
      onSkipPress={handleSkipPress}
      nextDisabled={occupancy.adults < 1}>
      {!city ? (
        <Text>Error, invalid cityId.</Text>
      ) : (
        <>
          <CounterRow
            style={styles.firstCounter}
            title="Adults"
            description="Must be at least one adult."
            value={occupancy.adults}
            setValue={(newValue: number) =>
              setOccupancy({...occupancy, adults: newValue})
            }
          />
          <CounterRow
            title="Children"
            value={occupancy.children}
            setValue={(newValue: number) =>
              setOccupancy({...occupancy, children: newValue})
            }
          />
          <CounterRow
            title="Infants"
            value={occupancy.infants}
            setValue={(newValue: number) =>
              setOccupancy({...occupancy, infants: newValue})
            }
          />
          <CounterRow
            title="Pets"
            value={occupancy.pets}
            setValue={(newValue: number) =>
              setOccupancy({...occupancy, pets: newValue})
            }
          />
        </>
      )}
    </SearchStep>
  );
};

export default Who;
