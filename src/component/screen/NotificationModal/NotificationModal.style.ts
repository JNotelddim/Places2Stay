import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    padding: spacing.whitespace.xlarge,
    backgroundColor: colors.paleYellow,
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
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: spacing.whitespace.medium,
  },
  notificationText: {
    maxWidth: '85%',
  },
});

export default styles;
