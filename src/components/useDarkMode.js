import { useEffect, useState } from 'react';

export const useDarkMode = () => {


    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
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
    const localTheme = window.localStorage.getItem('theme');
    
      localTheme ?
        setTheme(localTheme) :
        setMode('light');
    setComponentMounted(true);
  }, []);
  
  return [theme, toggleTheme, componentMounted]
};