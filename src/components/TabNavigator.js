import { StatusBar, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import { useThemeContext } from 'contexts';
import { PostsScreen, CreatePostsScreen, ProfileScreen } from 'screens';

const Tab = createBottomTabNavigator();

const tabScreens = [
  {
    id: 1,
    name: 'home',
    headerTitle: 'Публікації',
    component: PostsScreen,
    iconName: 'grid',
  },
  {
    id: 2,
    name: 'create_post',
    headerTitle: 'Створити публікацію',
    component: CreatePostsScreen,
    iconName: 'plus',
  },
  {
    id: 3,
    name: 'profile',
    headerTitle: 'Профіль',
    component: ProfileScreen,
    iconName: 'user',
  },
];

const TabNavigator = () => {
  const theme = useThemeContext();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: [styles.header, { backgroundColor: theme.bgPrimary }],
        tabBarStyle: [
          styles.tabBar,
          { backgroundColor: theme.bgPrimary, borderColor: theme.colorBorderSecondary },
        ],
        tabBarShowLabel: false,
      }}
    >
      {tabScreens.map(({ id, name, headerTitle, component, iconName }) => (
        <Tab.Screen
          key={id}
          name={name}
          component={component}
          options={{
            headerTitle,
            tabBarItemStyle: styles.tabBarItem,
            tabBarActiveBackgroundColor: theme.colorAccent,
            tabBarActiveTintColor: theme.colorLight,
            tabBarIcon: ({ color }) => <Icon name={iconName} size={22} color={color} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    // paddingTop: 10,
    // paddingBottom: 10,
    height: 44 + StatusBar.currentHeight,
  },
  tabBar: { minHeight: 58, alignItems: 'center', borderTopWidth: 1 },
  tabBarItem: {
    marginHorizontal: 8,
    marginVertical: 9,
    maxWidth: 70,
    borderRadius: 20,
    height: 40,
  },
});

export default TabNavigator;
