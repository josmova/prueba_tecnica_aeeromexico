import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/index';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
