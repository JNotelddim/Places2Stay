import {colors} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.paleYellow,
  },
  headerImage: {
    width: Dimensions.get('screen').width,
    height: 300,
  },
  backButton: {},
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
});

export default styles;
