import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderTopColor: colors.slateGrey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.whitespace.large,
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    marginBottom: spacing.whitespace.small,
  },
  controlValue: {
    marginHorizontal: spacing.whitespace.medium,
  },
});

export default styles;
