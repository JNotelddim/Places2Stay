import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
