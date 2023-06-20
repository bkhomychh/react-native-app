import { StyleSheet, Text, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useThemeContext } from 'contexts/ThemeContext';

const MapScreen = () => {
  const theme = useThemeContext();

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Створити публікацію</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.logoutBtn}>
          <Icon name="log-out" size={24} color={theme.colorTextSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.posts}>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 44,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#B3B3B3',
  },
  pageTitle: {
    flex: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
    textAlign: 'center',
  },
  logoutBtn: {
    position: 'absolute',
    top: 0,
    right: 16,
    height: '100%',
    justifyContent: 'center',
  },
  posts: {},
});

export default MapScreen;
