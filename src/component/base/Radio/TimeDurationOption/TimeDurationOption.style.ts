import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 115,
    borderColor: colors.slateGrey,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingVertical: spacing.whitespace.small,
    paddingHorizontal: 'auto',
    marginRight: spacing.whitespace.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderColor: colors.black,
  },
  mainIcon: {
    marginBottom: spacing.whitespace.small,
  },
  smallIcon: {
    marginVertical: 4,
  },
  datesText: {
    marginTop: 4,
  },
});

export default styles;
