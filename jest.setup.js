/* eslint-env jest */

jest.mock('expo-status-bar', () => ({
  StatusBar: ({ children }: any) => null,
}));

jest.mock('react-native-safe-area-context', () => {
  const React = require('react');
  const { View } = require('react-native');

  return {
    SafeAreaProvider: ({ children }: any) => React.createElement(View, null, children),
    SafeAreaView: ({ children }: any) => React.createElement(View, null, children),
    SafeAreaInsetsContext: React.createContext({}),
    SafeAreaFrameContext: React.createContext({}),
    useSafeAreaInsets: jest.fn(() => ({ top: 0, left: 0, bottom: 0, right: 0 })),
    useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 0, height: 0 })),
    initialWindowMetrics: {
      frame: { x: 0, y: 0, width: 0, height: 0 },
      insets: { top: 0, left: 0, bottom: 0, right: 0 },
    },
  };
});