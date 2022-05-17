import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageWrapper: {
    position: 'relative',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    // maxWidth: '100%',
  },
  image: {
    maxWidth: '100%',
    height: 150, // TODO: make this not hardcoded -- why doesn't auto work?
  },
  imageLabel: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 8,
  },
});

export default styles;
