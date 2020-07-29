import react from 'react';


const ThemeContext = react.createContext()

export const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

export default ThemeContext;