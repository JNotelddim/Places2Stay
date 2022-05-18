import {colors} from 'const';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    maxWidth: '100%',
    height: 150,
  },
  imageLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.orange,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 8,
  },
});

export default styles;
