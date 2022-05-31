import {StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: colors.paleYellow,
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    zIndex: 2,
    top: spacing.whitespace.xlarge,
    left: 16,
  },
  image: {
    width: '100%',
  },
  contentWrapper: {
    padding: spacing.whitespace.large,
  },
  heading: {
    marginBottom: spacing.whitespace.xlarge,
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default styles;
