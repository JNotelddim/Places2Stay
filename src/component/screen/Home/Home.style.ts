import {colors, spacing} from 'const';
import {Dimensions, StyleSheet} from 'react-native';

const {medium, large, xlarge, screenHorizontal} = spacing.whitespace;

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: xlarge,
    paddingHorizontal: screenHorizontal,
    backgroundColor: colors.paleYellow,
    height: '100%', // why doesn't flex: 1  have the same effect?
  },
  fixedHeader: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: screenHorizontal,
    marginLeft: -screenHorizontal,
    paddingTop: 80,
    paddingBottom: large,
    backgroundColor: colors.highOpacityPaleYellow,
    zIndex: 2,
  },
  imageCard: {
    marginTop: 24,
    marginBottom: xlarge,
  },
  carousel: {
    width: Dimensions.get('screen').width,
    paddingLeft: screenHorizontal,
    marginLeft: -screenHorizontal,
    marginTop: 16,
    marginBottom: xlarge,
  },
  cta: {
    marginVertical: medium,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.whitespace.unsafeHeaderTop,
    paddingHorizontal: spacing.whitespace.screenHorizontal,
    paddingBottom: spacing.whitespace.large,
    backgroundColor: colors.extraPaleYellow,
  },
});

export default styles;
