import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    backgroundColor: '#FFF1D2',
    height: '100%', // why doesn't flex: 1  have the same effect?
  },
  inputWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 18,
    marginBottom: 18,

    border: '1px solid rgba(0, 0, 0, 0.19)',
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  input: {
    textAlign: 'center',
  },
  cta: {
    marginTop: 24,
  },
  carousel: {
    marginTop: 16,
    paddingLeft: 50,
    marginLeft: -50,
    width: Dimensions.get('screen').width,
  },
});

export default styles;
