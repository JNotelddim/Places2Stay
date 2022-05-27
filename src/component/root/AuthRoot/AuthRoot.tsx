import React from 'react';

import {NavigationRoot, UnauthenticatedRoot} from 'component/provider';

import {AuthRootProps} from './AuthRoot.type';

const AuthRoot: React.FC<AuthRootProps> = ({isAuthenticated}) => {
  return isAuthenticated ? <NavigationRoot /> : <UnauthenticatedRoot />;
};

export default AuthRoot;
