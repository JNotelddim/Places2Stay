import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {colors} from 'const';
import {IconButton, Text} from 'component/base';
import {OverlaidCard} from 'component/layout';

import styles from './SearchStep.style';

import {SearchStackNavigation} from 'component/screen/Search/Search.type';
import {SearchStepProps} from './SearchStep.type';

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
      headerContainerStyles={styles.headerContainer}
      contentContainerStyles={styles.wrapperContent}>
      <View>
        <View style={styles.topRow}>
          <IconButton name="chevron-left" onPress={handleGoBack} outlined />
          <Text variant="heading2" style={styles.cityName}>
            {cityName}
          </Text>
        </View>

        {children}
      </View>

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

export default SearchStep;
