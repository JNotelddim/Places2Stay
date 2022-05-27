import React from 'react';

// import { makeRedirectUri } from 'expo-auth-session';
import {useIdTokenAuthRequest} from 'expo-auth-session/providers/google';

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// TODO: store for next session in storage
export const AuthProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState<string | undefined>(undefined);
  const [, , promptAsync] = useIdTokenAuthRequest({
    // ...Constants.manifest?.extra?.google,
    iosClientId:
      // TODO: move to manifest
      '',
    redirectUri: 'places2stay://',
    // redirectUri: 'https://places2stay.com',
    //redirectUri: 'org.reactjs.native.example.Places2Stay',
  });
  const isAuthenticated = !!token;

  console.log({isAuthenticated, token});

  const login = async () => {
    console.log('loginAttempt');

    const response = await promptAsync().catch(reason =>
      console.log('[LoginPromptError] reason:', reason),
    );

    if (response?.type !== 'success') {
      throw new Error(
        '[LoginPromptResponseError] Non-SuccessType: ' + response?.type,
      );
    }
    console.log('setToken', response.params.id_token, {
      params: response.params,
    });
    setToken(response.params.id_token);
  };

  const logout = () => {
    setToken(undefined);
    console.log('logoutAttempt');
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
      {React.Children.map(children, child =>
        React.cloneElement(child as React.ReactElement, {
          isAuthenticated,
          login,
          logout,
        }),
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error(
      '[AuthProviderError] useAuthContext hook called from outside of AuthProvider -- couldnt access AuthContext',
    );
  }
  return context;
};
