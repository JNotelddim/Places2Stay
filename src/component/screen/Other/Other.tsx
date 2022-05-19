import React from 'react';

import {Text} from 'component/base';
import {OverlaidCard} from 'component/layout';
import {StyleSheet} from 'react-native';
import {colors} from 'const';

export interface OtherProps {}

const Other: React.FC<OtherProps> = () => {
  return (
    <OverlaidCard
      header={() => <Text variant="heading1">Background Heading</Text>}
      headerContainerStyles={styles.headerContainerStyles}
      contentContainerStyles={styles.cardStyles}>
      <Text variant="heading1">Card Heading</Text>
      <Text>Here is some body text.</Text>
    </OverlaidCard>
  );
};

const styles = StyleSheet.create({
  headerContainerStyles: {
    backgroundColor: colors.orange,
  },
  cardStyles: {
    backgroundColor: colors.extraPaleYellow,
  },
});

export default Other;
