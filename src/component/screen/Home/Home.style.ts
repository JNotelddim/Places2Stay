import {colors} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

const SCREEN_HORIZONTAL_PADDING = 50;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 40,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    backgroundColor: colors.paleYellow,
    height: '100%', // why doesn't flex: 1  have the same effect?
  },
  fixedHeader: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: SCREEN_HORIZONTAL_PADDING,
    marginLeft: -SCREEN_HORIZONTAL_PADDING,
    paddingTop: 80,
    paddingBottom: 20,
    backgroundColor: colors.highOpacityPaleYellow,
    zIndex: 2,
  },
  imageCard: {
    marginTop: 24,
    marginBottom: 40,
  },
  carousel: {
    width: Dimensions.get('screen').width,
    paddingLeft: SCREEN_HORIZONTAL_PADDING,
    marginLeft: -SCREEN_HORIZONTAL_PADDING,
    marginTop: 16,
    marginBottom: 40,
  },
  cta: {
    marginVertical: 12,
  },
});

export default styles;
