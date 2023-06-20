import { useEffect, useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Title, InputField, Button, Avatar } from 'components';
import { useThemeContext } from 'contexts/ThemeContext';
import BackgroundImage from 'assets/images/bg-mountains.jpg';

const RegistrationScreen = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const theme = useThemeContext();
  const navigation = useNavigation();
  const { height: WINDOW_HEIGHT } = useWindowDimensions();

  useEffect(() => {
    Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShown(false));

    return () => Keyboard.removeAllListeners('keyboardDidHide');
  }, []);

  const showKeyboard = () => setIsKeyboardShown(true);
  const hideKeyboard = () => Keyboard.dismiss();
  const handleSubmit = () => navigation.navigate('home');

  const formStyles = StyleSheet.create({
    height: isKeyboardShown ? 374 : 'auto',
    backgroundColor: theme.bgPrimary,
  });

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.wrapper}>
        <ImageBackground
          source={BackgroundImage}
          style={[styles.imgContainer, { height: WINDOW_HEIGHT }]}
        >
          <View style={[styles.form, formStyles]}>
            <View style={styles.content}>
              <Avatar
                source={{
                  uri: 'https://reactjs.org/logo-og.png',
                }}
                style={styles.avatar}
              />
              <Title text="Реєстрація" style={styles.title} />

              <InputField
                placeholder="Логін"
                onFocus={showKeyboard}
                onChangeText={setLogin}
                value={login}
                style={styles.input}
              />
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

              <Button text="Зареєстуватися" onPress={handleSubmit} style={styles.btn} />

              <View style={styles.row}>
                <Text style={[styles.link, { color: theme.colorTextTertiary }]}>
                  Вже є акаунт?{' '}
                </Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('login')}>
                  <Text style={[styles.link, { color: theme.colorTextTertiary }]}>Увійти</Text>
                </TouchableOpacity>
              </View>
            </View>
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
  avatar: {
    wrapper: { marginBottom: 32 },
  },
  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  content: {
    marginTop: -60,
    paddingBottom: 45,
    paddingHorizontal: 16,
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
  row: {
    flexDirection: 'row',
  },
  link: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
  },
});

export default RegistrationScreen;
