import React from 'react';
import {render} from '@testing-library/react-native';

import {Home} from 'component/screen';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';

describe('Home Screen', () => {
  let wrapper: React.FC<NavigationContainerProps>;

  beforeEach(() => {
    wrapper = navProps => <NavigationContainer {...navProps} />;
  });

  test('Home Screen should have InputFacadeButton', () => {
    const view = render(<Home />, {wrapper});

    const inputFacadeButton = view.getByText("Try 'Boston'");

    expect(inputFacadeButton).toBeTruthy();
  });
});
