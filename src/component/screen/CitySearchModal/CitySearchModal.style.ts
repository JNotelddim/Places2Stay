import {colors, spacing} from 'const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardStyles: {
    backgroundColor: colors.paleYellow,
    height: '100%',
  },
  content: {
    padding: spacing.whitespace.xlarge,
    paddingTop: spacing.whitespace.medium,
  },
});

export default styles;
