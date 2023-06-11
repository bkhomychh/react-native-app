import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useThemeContext } from 'contexts';

const Button = ({ text, onPress, style }) => {
  const theme = useThemeContext();

  const styles = StyleSheet.create({
    wrapper: {
      padding: 16,
      width: '100%',
      alignItems: 'center',
      backgroundColor: theme.colorAccent,
      borderRadius: 50,
      ...style?.wrapper,
    },
    text: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 19,
      color: theme.colorLight,
      ...style?.text,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  style: {},
  onPress: () => null,
};

export default Button;
