import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {},
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperContent: {
    height: '100%',
    justifyContent: 'space-between',
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
    marginBottom: spacing.whitespace.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
