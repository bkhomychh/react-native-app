import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

import { useThemeContext } from 'contexts/ThemeContext';

const Title = ({ text, style }) => {
  const theme = useThemeContext();

  const styles = StyleSheet.create({
    title: {
      fontFamily: 'Roboto-Medium',
      fontSize: 30,
      lineHeight: 35,
      color: theme.colorTextPrimary,
      ...style,
    },
  });

  return <Text style={styles.title}>{text}</Text>;
};

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

Title.defaultProps = {
  text: '',
  style: {},
};

export default Title;
