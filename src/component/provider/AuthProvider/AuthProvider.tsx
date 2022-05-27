import React from 'react';

import * as WebBrowser from 'expo-web-browser';
import {makeRedirectUri, useAuthRequest, ResponseType} from 'expo-auth-session';
// import {useIdTokenAuthRequest} from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

// TODO: store for next session in storage
const discovery = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth', // 'https://accounts.spotify.com/authorize',
};

export const AuthProvider: React.FC = ({children}) => {
  const [token, setToken] = React.useState<string | undefined>(undefined);
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: 'CLIENT_ID',
      scopes: ['profile', 'email'],
      redirectUri: makeRedirectUri({
        scheme: 'org.reactjs.native.example.places2stay',
      }),
      codeChallenge: undefined,
      codeChallengeMethod: undefined,
    },
    discovery,
  );
  // const [request, response, promptAsync] = useAuthRequest(
  //   {
  //     responseType: ResponseType.Token, // IdToken,
  //     clientId: 'CLIENT_ID',
  //     // 'xx-xx.apps.googleusercontent.com',
  //     scopes: ['profile', 'email'], // ['userinfo.email'],
  //     redirectUri: makeRedirectUri({
  //       scheme: 'org.reactjs.native.example.places2stay',
  //     }),
  //   },
  //   {
  //     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
  //   },
  // );

  const isAuthenticated = !!token;

  console.log({isAuthenticated, token});

  React.useEffect(() => {
    console.log({response});
    if (response && response.type === 'success') {
      const tokenResult = response.params.access_token;
      console.log({tokenResult});
      setToken(tokenResult);
    }
  }, [response]);

  const login = async () => {
    console.log('loginAttempt');
    if (request) {
      await promptAsync().catch(reason =>
        console.log('[LoginPromptError] reason:', reason),
      );
    }

    // if (response?.type !== 'success') {
    //   throw new Error(
    //     '[LoginPromptResponseError] Non-SuccessType: ' + response?.type,
    //   );
    // }
    // console.log('setToken', response.params.id_token, {
    //   params: response.params,
    // });
    // setToken(response.params.id_token);
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
