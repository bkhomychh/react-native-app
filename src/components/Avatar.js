import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { useThemeContext } from 'contexts';

const Avatar = ({ source, style }) => {
  const theme = useThemeContext();

  const hasImageSrc = Boolean(source?.uri);

  const styles = StyleSheet.create({
    wrapper: {
      ...style?.wrapper,
    },
    avatar: {
      width: 120,
      height: 120,
      backgroundColor: theme.bgSecondary,
      borderRadius: 16,
    },
    container: {
      position: 'absolute',
      bottom: 14,
      right: -12,
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.bgPrimary,
      borderRadius: 25,
      borderWidth: 1,
      borderColor: hasImageSrc ? theme.colorBorder : theme.colorAccent,
    },
    icon: {
      color: hasImageSrc ? theme.colorTextSecondary : theme.colorAccent,
    },
  });

  return (
    <View style={styles.wrapper}>
      <Image source={source} style={styles.avatar} />
      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        {hasImageSrc ? (
          <Icon name="x" size={18} style={styles.icon} />
        ) : (
          <Icon name="plus" size={18} style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );
};

Avatar.propTypes = {
  style: PropTypes.object,
  source: PropTypes.object,
};

Avatar.defaultProps = {
  style: {},
  source: {},
};

export default Avatar;
