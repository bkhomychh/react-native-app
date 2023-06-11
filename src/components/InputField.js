import PropTypes from 'prop-types';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useThemeContext } from 'contexts';
import { useState } from 'react';

const InputField = ({ placeholder, style, isPassword, ...otherProps }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValueVisible, setIsValueVisible] = useState(!isPassword);
  const theme = useThemeContext();

  const toggleValueVisibility = () => setIsValueVisible(state => !state);
  const toggleFocus = () => setIsFocused(state => !state);

  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      ...style?.wrapper,
    },
    input: {
      paddingHorizontal: 16,
      height: 50,
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 19,
      color: theme.colorTextPrimary,
      backgroundColor: isFocused ? 'transparent' : theme.bgSecondary,
      borderWidth: 1,
      borderColor: isFocused ? theme.colorAccent : theme.colorBorder,
      borderRadius: 8,
      ...style?.input,
    },
    container: {
      position: 'absolute',
      top: 0,
      right: 16,
      height: '100%',
      justifyContent: 'center',
    },
    label: {
      fontFamily: 'Roboto-Regular',
      fontSize: 16,
      lineHeight: 19,
      color: theme.colorTextTertiary,
    },
  });

  return (
    <View style={styles.wrapper}>
      <TextInput
        secureTextEntry={!isValueVisible}
        placeholder={placeholder}
        placeholderTextColor={theme.colorTextSecondary}
        onBlur={toggleFocus}
        onFocus={toggleFocus}
        style={styles.input}
        {...otherProps}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={toggleValueVisibility}
          style={styles.container}
        >
          <Text style={styles.label}>{isValueVisible ? 'Сховати' : 'Показати'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  style: PropTypes.object,
};

InputField.defaultProps = {
  placeholder: '',
  isPassword: false,
  style: {},
};

export default InputField;
