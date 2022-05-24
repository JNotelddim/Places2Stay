import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {colors, spacing} from 'const';
import {SearchStep} from 'component/layout';
import {IconButton, Text} from 'component/base';
import {useMockDb, WhoScreenProps} from 'component/provider';
import {OccupantsSelection} from 'component/provider/NavigationProvider/NavigationProvider.type';

export interface CounterRowProps {
  title: string;
  description?: string;
  value: number;
  setValue: (newValue: number) => void;
  maximum?: number;
  minimum?: number;
  style?: StyleProp<ViewStyle>;
}

const CounterRow = ({
  title,
  description = 'description',
  value,
  setValue,
  maximum,
  minimum = 0,
  style,
}: CounterRowProps) => {
  const handleIncrement = () => {
    if (maximum === undefined || value < maximum) {
      setValue(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > minimum) {
      setValue(value - 1);
    }
  };

  return (
    <View style={[style, styles.counterWrapper]}>
      <View>
        <Text variant="heading2">{title}</Text>
        <Text color={colors.slateGrey}>{description}</Text>
      </View>
      <View style={styles.counterControlRow}>
        <IconButton name="minus" onPress={handleDecrement} />
        <Text>{value}</Text>
        <IconButton name="plus" onPress={handleIncrement} />
      </View>
    </View>
  );
};

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
    </SearchStep>
  );
};

const styles = StyleSheet.create({
  container: {},
  firstCounter: {
    marginTop: spacing.whitespace.xlarge,
  },

  // Counter
  counterWrapper: {
    borderTopWidth: 1,
    borderTopColor: colors.slateGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.whitespace.large,
  },
  counterControlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
});

export default Who;
