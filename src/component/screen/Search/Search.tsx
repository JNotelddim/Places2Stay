import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Where from './Where';
import What from './What';
import When from './When';
import Who from './Who';
import Results from './Results';

export interface SearchProps {}

const Stack = createStackNavigator();

const Search: React.FC<SearchProps> = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Where" component={Where} />
      <Stack.Screen name="What" component={What} />
      <Stack.Screen name="When" component={When} />
      <Stack.Screen name="Who" component={Who} />
      <Stack.Screen name="Results" component={Results} />
    </Stack.Navigator>
  );
};

export default Search;
