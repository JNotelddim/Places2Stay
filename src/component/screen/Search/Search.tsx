import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Where} from './Where';

export interface SearchProps {}

const Stack = createStackNavigator();

const Search: React.FC<SearchProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Where" component={Where} />
      {/* <Stack.Screen name="Where" component={Where} /> */}
      {/* <Stack.Screen name="When" component={When} /> */}
      {/* <Stack.Screen name="Who" component={Who} /> */}
    </Stack.Navigator>
  );
};

export default Search;
