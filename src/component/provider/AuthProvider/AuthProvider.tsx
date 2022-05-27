import React from 'react';
import {Platform} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import {makeRedirectUri, ResponseType} from 'expo-auth-session';
import {useIdTokenAuthRequest} from 'expo-auth-session/providers/google';

import {GOOGLE_IOS_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID} from '@env';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState<unknown>(undefined);
  const isAuthenticated = !!token;

  const [, , promptAsync] = useIdTokenAuthRequest({
    responseType: ResponseType.Token,
    iosClientId:
      Platform.OS === 'ios' ? GOOGLE_IOS_CLIENT_ID : GOOGLE_ANDROID_CLIENT_ID,
    redirectUri: makeRedirectUri({
      scheme: 'org.reactjs.native.example.places2stay',
    }),
  });

  const login = async () => {
    const response = await promptAsync().catch(reason =>
      console.log('[LoginPromptError] reason:', reason),
    );

    if (response?.type !== 'success') {
      throw new Error(
        '[LoginPromptResponseError] Non-SuccessType: ' + response?.type,
      );
    }

    setToken(response.params);
  };

  const logout = () => {
    setToken(undefined);
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
