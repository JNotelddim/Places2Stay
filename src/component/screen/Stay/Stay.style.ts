import {colors, spacing} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

const {xlarge, screenHorizontal} = spacing.whitespace;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.paleYellow,
    position: 'relative',
  },
  headerImage: {
    width: Dimensions.get('screen').width,
    height: 300,
  },
  backButton: {
    position: 'absolute',
    zIndex: 2,
    top: xlarge,
    left: 16,
  },
  content: {
    paddingVertical: screenHorizontal,
    paddingHorizontal: xlarge,
  },
  bodyText: {
    marginBottom: 8,
  },
  marginedInfoSection: {
    marginTop: 24,
    marginBottom: 32,
  },
  toggle: {
    width: '60%',
  },
});

export default styles;
