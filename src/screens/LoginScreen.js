import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { Title } from 'components';
import { useThemeContext } from 'contexts/ThemeContext';
import BackgroundImage from 'assets/images/bg-mountains.jpg';

const LoginScreen = () => {
  const theme = useThemeContext();
  console.log(theme);

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={BackgroundImage} style={styles.imgContainer}>
        <View>
          <Title text="Login" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
  },
  form: {},
});

export default LoginScreen;
