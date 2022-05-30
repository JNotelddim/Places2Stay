import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    padding: spacing.whitespace.xlarge,
  },
  iconButton: {
    marginLeft: -1 * spacing.whitespace.large,
  },
  header: {
    marginVertical: spacing.whitespace.xlarge,
  },
  notificationWrapper: {
    padding: spacing.whitespace.large,
    borderRadius: 8,
    borderColor: colors.slateGrey,
    borderWidth: 1,
    marginVertical: spacing.whitespace.small,
    flexDirection: 'row',
  },
  icon: {
    marginRight: spacing.whitespace.medium,
  },
});

export default styles;
