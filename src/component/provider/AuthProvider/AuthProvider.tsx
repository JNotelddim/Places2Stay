import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {makeRedirectUri, ResponseType} from 'expo-auth-session';
import {useIdTokenAuthRequest} from 'expo-auth-session/providers/google';
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
  const isAuthenticated = !!token;

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

  const [, , promptAsync] = useIdTokenAuthRequest({
    responseType: ResponseType.Token,
    iosClientId: GOOGLE_IOS_CLIENT_ID,
    androidClientId: GOOGLE_ANDROID_CLIENT_ID,
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

    // I'm very aware this is not an actual token value. For a demo app it'll do.
    setToken(response.params);
    console.log('[AuthPersist] Persisting token.');
    await SecureStore.setItemAsync('token', JSON.stringify(response.params));
  };

  const logout = async () => {
    setToken(undefined);
    console.log('[AuthPersist] Deleting persisted token.');
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
