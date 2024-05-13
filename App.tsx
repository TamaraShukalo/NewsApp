import React from 'react';
import {MainNavigation} from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {KeyboardProvider} from 'react-native-keyboard-controller';

function App(): React.JSX.Element {
  return (
    <KeyboardProvider>
      <NavigationContainer
        onReady={() => {
          BootSplash.hide();
        }}>
        <MainNavigation />
      </NavigationContainer>
    </KeyboardProvider>
  );
}

export default App;
