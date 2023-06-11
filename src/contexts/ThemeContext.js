import { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { theme } from 'utils';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorSchema }) =>
      setCurrentTheme(colorSchema),
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return <ThemeContext.Provider value={theme[currentTheme]}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => useContext(ThemeContext);
