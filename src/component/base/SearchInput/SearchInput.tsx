import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './SearchInput.style';
import {SearchInputProps} from './SearchInput.type';

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

export default SearchInput;
