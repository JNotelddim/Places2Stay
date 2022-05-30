import React from 'react';
import {render} from '@testing-library/react-native';

import {Home} from 'component/screen';

test('Home Screen should have InputFacadeButton', () => {
  const view = render(<Home />);

  const inputFacadeButton = view.getByText("Try 'Boston'");

  expect(inputFacadeButton).toBeTruthy();
});
