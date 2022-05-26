import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {colors, spacing} from 'const';
import {Pressable, Text} from 'component/base';
import {SearchStep} from 'component/layout';
import {useMockDb, WhatScreenProps} from 'component/provider';

interface WhatCardProps {
  title: string;
  description: string;
  iconName: string;
  onPress: () => void;
}

const WhatCard: React.FC<WhatCardProps> = ({
  onPress,
  title,
  description,
  iconName,
}) => (
  <Pressable onPress={onPress}>
    <View style={styles.whatCard}>
      <View>
        <Text variant="heading2">{title}</Text>
        <Text color={colors.slateGrey}>{description} </Text>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name={iconName} size={40} />
      </View>
    </View>
  </Pressable>
);

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

const styles = StyleSheet.create({
  container: {},
  whatCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.whitespace.large,
    marginTop: spacing.whitespace.large,
    borderRadius: 8,
    // TODO: shadow
  },
  iconWrapper: {
    backgroundColor: colors.midOpacityBlue,
    padding: 8,
    borderRadius: 8,
  },
});

export default What;
