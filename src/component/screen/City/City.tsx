import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {CityScreenProps, useMockDb} from 'component/provider';
import {IconButton, Text} from 'component/base';
import {colors, spacing} from 'const';

const City: React.FC<CityScreenProps> = ({route, navigation}) => {
  const {cityId} = route.params;
  const mockDb = useMockDb();
  const city = mockDb.getCityById(cityId);

  // TODO: add listings by city

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <IconButton
        name="chevron-left"
        onPress={handleGoBack}
        style={styles.backButton}
        color={colors.black}
        opaque
      />
      {city ? (
        <>
          <Image source={city.imageSource} style={styles.image} />
          <Text>{city.name}</Text>
        </>
      ) : (
        <Text>Error, no city found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    zIndex: 2,
    top: spacing.whitespace.xlarge,
    left: 16,
  },
  image: {
    width: '100%',
  },
});

export default City;
