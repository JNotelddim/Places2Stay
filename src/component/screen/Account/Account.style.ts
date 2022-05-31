import {StyleSheet} from 'react-native';

import {spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.whitespace.unsafeScreenTop,
    paddingHorizontal: spacing.whitespace.large,
  },
  header: {
    marginVertical: spacing.whitespace.xlarge,
    alignSelf: 'center',
  },
});

export default styles;
