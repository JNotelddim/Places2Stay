import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleYellow,
    height: '100%',
    paddingTop: spacing.whitespace.unsafeScreenTop,
    paddingHorizontal: spacing.whitespace.screenHorizontal,
  },
  header: {
    marginBottom: spacing.whitespace.large,
  },
});

export default styles;
