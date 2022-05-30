import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {makeRedirectUri, ResponseType} from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as SecureStore from 'expo-secure-store';

import {GOOGLE_IOS_CLIENT_ID, GOOGLE_ANDROID_CLIENT_ID} from '@env';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState<unknown>(undefined);
  const [userData, setUserData] = React.useState<
    Record<string, unknown> | undefined
  >();
  const isAuthenticated = !!token;

  const [, , promptAsync] = Google.useAuthRequest({
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    expoClientId: GOOGLE_ANDROID_CLIENT_ID,
  });

  console.log({token, userData});

  React.useEffect(() => {
    const checkForPersistedToken = async () => {
      await SecureStore.getItemAsync('token')
        .then(result => {
          if (result) {
            console.log(
              '[AuthPersist] Found token value, updating auth context state',
            );
            setToken(JSON.parse(result));
          } else {
            console.log('[AuthPersist] No persisted token found.');
          }
        })
        .catch(err => console.log(err));
    };
    checkForPersistedToken();
  }, []);

  const login = async () => {
    const response = await promptAsync();

    console.log({response});

    if (response?.type !== 'success' || !response.authentication?.accessToken) {
      throw new Error(
        '[LoginError] Login prompt resonse was not successful. Error type: ' +
          response?.type,
      );
    }

    const accessToken = response.authentication.accessToken;
    console.log('[AuthPersist] Persisting token.');
    setToken(accessToken);
    await SecureStore.setItemAsync('token', accessToken);

    let userInfoResponse = await fetch(
      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers: {Authorization: `Bearer ${accessToken}`},
      },
    );

    if (!userInfoResponse?.ok) {
      throw new Error('[LoginError] Google user info fetch failed.');
    }

    userInfoResponse.json().then(data => setUserData(data));
  };

  const logout = async () => {
    console.log('[AuthPersist] Deleting persisted token.');
    // TODO: google.sign out?
    setToken(undefined);
    await SecureStore.deleteItemAsync('token');
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
