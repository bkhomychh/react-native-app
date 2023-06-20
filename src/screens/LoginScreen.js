import { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Title, InputField, Button } from 'components';
import { useThemeContext } from 'contexts/ThemeContext';
import BackgroundImage from 'assets/images/bg-mountains.jpg';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const theme = useThemeContext();
  const { height: WINDOW_HEIGHT } = useWindowDimensions();

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShown(false));

    return () => Keyboard.removeAllListeners('keyboardDidHide');
  }, []);

  const showKeyboard = () => setIsKeyboardShown(true);
  const hideKeyboard = () => Keyboard.dismiss();
  const handleSubmit = () => console.log({ email, password });

  const formStyles = StyleSheet.create({
    paddingBottom: isKeyboardShown ? 20 : 111,
    height: isKeyboardShown ? 248 : 'auto',
    backgroundColor: theme.bgPrimary,
  });

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.wrapper}>
        <ImageBackground
          imageStyle={{ top: 0, left: 0 }}
          source={BackgroundImage}
          style={[styles.imgContainer, { height: WINDOW_HEIGHT }]}
        >
          <View style={[styles.form, formStyles]}>
            <KeyboardAvoidingView
              style={styles.block}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <Title text="Увійти" style={styles.title} />

              <InputField
                placeholder="Адреса електронної пошти"
                onFocus={showKeyboard}
                onChangeText={setEmail}
                value={email}
                style={styles.input}
              />
              <InputField
                placeholder="Пароль"
                isPassword
                onFocus={showKeyboard}
                onChangeText={setPassword}
                value={password}
                style={styles.inputLast}
              />
            </KeyboardAvoidingView>

            <Button text="Увійти" onPress={handleSubmit} style={styles.btn} />
            <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('register')}>
              <Text style={[styles.link, { color: theme.colorTextTertiary }]}>
                Немає акаунту? <Text style={styles.underlined}>Зареєструватися</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 33,
  },
  form: {
    paddingTop: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    wrapper: { marginBottom: 16 },
  },
  inputLast: {
    wrapper: { marginBottom: 43 },
  },
  btn: {
    wrapper: { marginBottom: 16 },
  },
  link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
