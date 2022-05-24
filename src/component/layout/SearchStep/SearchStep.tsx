import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, spacing} from 'const';
import {IconButton, Text} from 'component/base';
import {SearchStackNavigation} from 'component/provider';
import {OverlaidCard} from 'component/layout';

export interface SearchStepProps {
  title: string;
  cityName: string;
}

const SearchStep: React.FC<SearchStepProps> = ({cityName, title, children}) => {
  const navigation = useNavigation<SearchStackNavigation>();

  const handleGoBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  // TODO: fix alignment for iconbutton  and cityName
  return (
    <OverlaidCard
      header={() => (
        <Text color={colors.white} variant="heading1">
          {title}
        </Text>
      )}
      headerContainerStyles={styles.headerContainer}>
      <View style={styles.topRow}>
        <IconButton name="chevron-left" onPress={handleGoBack} opaque />
        <Text variant="heading2" style={styles.cityName}>
          {cityName}
        </Text>
      </View>

      {children}
      {/* TODO: next button? */}
    </OverlaidCard>
  );
};

const styles = StyleSheet.create({
  container: {},
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: spacing.whitespace.xlarge,
  },
  cityName: {
    width: '75%',
    textAlign: 'center',
  },
});

export default SearchStep;
