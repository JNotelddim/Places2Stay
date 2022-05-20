import {colors, spacing} from 'const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.paleGrey,
    borderRadius: 8,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    backgroundColor: colors.blue,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  kebabIcon: {
    marginTop: 16,
    marginRight: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 18,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  marginBottom: {
    marginBottom: spacing.whitespace.medium,
  },
});

export default styles;
