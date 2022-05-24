import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors, spacing} from 'const';
import {IconButton, Text} from 'component/base';
import {SearchStackNavigation} from 'component/provider';
import {OverlaidCard} from 'component/layout';

export interface SearchStepProps {
  title: string;
  cityName: string;
  showSkip?: boolean;
  showNext?: boolean;
  onNextPress?: () => void;
  onSkipPress?: () => void;
  nextDisabled?: boolean;
}

const SearchStep: React.FC<SearchStepProps> = ({
  cityName,
  title,
  children,
  showNext,
  showSkip,
  onNextPress,
  onSkipPress,
  nextDisabled = false,
}) => {
  const navigation = useNavigation<SearchStackNavigation>();

  const handleGoBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const handleSkipPress = () => {
    onSkipPress?.();
  };
  const handleNextPress = () => {
    onNextPress?.();
  };

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

      <View style={styles.buttonRow}>
        {showSkip && <Button title="Skip" onPress={handleSkipPress} />}

        {showNext && (
          <Button
            disabled={nextDisabled}
            onPress={handleNextPress}
            title="Next"
          />
        )}
      </View>
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
  buttonRow: {
    marginTop: spacing.whitespace.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SearchStep;
