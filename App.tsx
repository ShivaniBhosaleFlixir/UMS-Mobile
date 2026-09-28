import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { AppNavigator } from './src/navigation';
import { ErrorBoundary } from './src/components/common/ErrorBoundary';
import { Snackbar } from './src/components/common/Snackbar';
import { colors } from './src/theme/colors';

LogBox.ignoreLogs(['Warning:']);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={colors.background}
          />
          <AppNavigator />
          <Snackbar />
        </ErrorBoundary>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
