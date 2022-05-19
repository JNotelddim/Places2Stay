import {colors} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

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
    top: 40,
    left: 16,
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: 40,
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
