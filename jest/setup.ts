import 'react-native-gesture-handler/jestSetup';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// If using any other Icon groups from vector-icons, will also need to mock those.
jest.mock('react-native-vector-icons/Feather', () => 'Icon');

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      setOptions: jest.fn(),
    }),
  };
});

jest.mock('react-native', () => ({
  ...jest.requireActual('react-native'),
  Image: jest.fn(),
}));
