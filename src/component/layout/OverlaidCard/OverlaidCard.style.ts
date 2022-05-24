import {Dimensions, StyleSheet} from 'react-native';

import {colors, spacing} from 'const';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: Dimensions.get('screen').height,
  },
  header: {
    paddingTop: spacing.whitespace.unsafeScreenTop,
    paddingBottom: spacing.whitespace.xlarge,
    paddingHorizontal: spacing.whitespace.screenHorizontal,
    height: '100%',
  },
  card: {
    backgroundColor: colors.paleYellow,
    padding: spacing.whitespace.screenHorizontal,
    paddingTop: spacing.whitespace.medium,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 0,
    borderRadius: 16,
  },
  dragBar: {
    alignSelf: 'center',
    marginBottom: spacing.whitespace.xlarge,
  },
});

export default styles;
