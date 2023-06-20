import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';

import { RegistrationScreen, LoginScreen, PostsScreen } from 'screens';
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
        {/* <PostsScreen /> */}
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default App;
