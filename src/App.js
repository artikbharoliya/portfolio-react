import React,{useState} from 'react';
import './App.css';
// import Testing from './components/testingComponent';
import SideMenu from './components/sideMenu';
import HomeComponent from './components/homeComponent';
import {ThemeContextProvider} from './ThemeContext';
import './css/main.scss'

function App() {
  const [themeData, setThemeData] = useState("")
  return (
        <div className="App Conatiner">
          <ThemeContextProvider value={themeData}>
            <SideMenu getTheme={setThemeData} className="MenuZ"/>
            <HomeComponent className="HomeZ"/>
          </ThemeContextProvider>
        </div>
  );
}

export default App;
