import React from 'react';
import Toggle from './toggle';
import {useDarkMode} from './useDarkMode';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from '../Global';
import {lightTheme, darkTheme} from './theme';
function DarkMode (props){

    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    
    props.passData(theme);
    if(!componentMounted){
      return <div/>
    }
    else{
        return(
            <ThemeProvider theme={themeMode}>
            <>
              <GlobalStyles />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
              
            </>
          </ThemeProvider>
            
        );
    }
}
export default DarkMode;