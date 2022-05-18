import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

export interface SearchInputProps extends TextInputProps {
  wrapperStyle?: StyleProp<ViewStyle>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  wrapperStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.inputWrapper, wrapperStyle]}>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

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

export default SearchInput;
