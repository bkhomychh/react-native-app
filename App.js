import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';

import { RegistrationScreen, LoginScreen } from 'screens';
import { ThemeProvider } from 'contexts';

const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <View style={styles.wrapper}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
