import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    borderColor: colors.slateGrey,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingVertical: spacing.whitespace.small,
    paddingHorizontal: spacing.whitespace.medium,
    marginRight: spacing.whitespace.medium,
  },
  selected: {
    borderColor: colors.black,
  },
});

export default styles;
