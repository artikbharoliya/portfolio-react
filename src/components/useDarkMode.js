import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const setMode = mode => {
        setTheme(mode)
    };
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);
  const toggleTheme = () => {
    if (theme === 'light') {
        setMode('dark');
    } else {
        setMode('light');
    }
  };
  useEffect(() => {
    setMode('dark');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};