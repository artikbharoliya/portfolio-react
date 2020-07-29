import React, { useContext} from 'react';
import ThemeContext from '../ThemeContext';

function Testing(props) {
    const theme = useContext(ThemeContext);
  return (
    <div >
        
            Hello I am a testing component
            Here {theme} is activated.       
    </div>
  );
}

export default Testing;