import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Title, InputField, Button, Avatar } from 'components';
import { useThemeContext } from 'contexts/ThemeContext';
import BackgroundImage from 'assets/images/bg-mountains.jpg';

const RegistrationScreen = () => {
  const theme = useThemeContext();

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
      flex: 0.7,
      backgroundColor: theme.bgPrimary,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },
    content: {
      height: '100%',
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
    link: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 19,
      color: theme.colorTextTertiary,
    },
  });

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={BackgroundImage} style={styles.imgContainer}>
        <View style={styles.form}>
          <View style={styles.content}>
            <Avatar
              source={{
                uri: 'https://reactjs.org/logo-og.png',
              }}
              style={styles.avatar}
            />
            <Title text="Реєстрація" style={styles.title} />

            <InputField placeholder="Логін" style={styles.input} />
            <InputField placeholder="Адреса електронної пошти" style={styles.input} />
            <InputField placeholder="Пароль" isPassword style={styles.inputLast} />

            <Button text="Зареєстуватися" style={styles.btn} />
            <TouchableOpacity activeOpacity={0.7} onPress={() => console.log('click')}>
              <Text style={styles.link}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
