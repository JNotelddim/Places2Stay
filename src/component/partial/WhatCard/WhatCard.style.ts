import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  card: {
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

export default styles;
