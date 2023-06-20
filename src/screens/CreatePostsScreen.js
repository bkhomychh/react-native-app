import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';

import { useThemeContext } from 'contexts/ThemeContext';

const CreatePostsScreen = () => {
  const theme = useThemeContext();

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.pageTitle}>Створити публікацію</Text>
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
  posts: {},
});

export default CreatePostsScreen;
