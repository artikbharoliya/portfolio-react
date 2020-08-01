import React, { useState } from 'react';
import { ProSidebar} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import { ReactComponent as SunIcon } from '../assets/sun.svg';
// import { ReactComponent as Film } from '../assets/film.svg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import { ReactComponent as About } from '../assets/user.svg';
import { ReactComponent as Folder } from '../assets/folder.svg';

import { ReactComponent as Home } from '../assets/home.svg';

import { ReactComponent as Blog } from '../assets/Edit.svg';
import '../css/main.scss';
import DarkMode from '../components/darkmode';

import { Link } from 'react-router-dom';
// import Main from './Main';

function SideMenu(props) {
  
  const [toggled, setToggled] = useState(false);
    const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  return (
    <>
        <div className="btn_toggle" onClick={() => handleToggleSidebar(true)}>
                <Folder />
        </div>
        <div className="Menu_Wrapper">
        <ProSidebar collapsed={true} toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar} >
            
          

          
            <div className="Menu_items">
                <ul className="">
                

                    <div className="Menu_item_container">
                    <Link to="/" className="Menu_Buttons"><li ><Home className="Custom_Svg"/></li></Link>
                      <span className="mytooltip">Home</span>
                    </div>
                    
                    
                    <div className="Menu_item_container">
                    <Link to="/about" className="Menu_Buttons"><li ><About className="Custom_Svg"/></li></Link>
                      <span className="mytooltip">About Me</span>
                    </div>

                    <div className="Menu_item_container">
                      <Link to="/project" className="Menu_Buttons"><li ><Folder className="Custom_Svg"/></li></Link>

                      <span className="mytooltip">Project</span>
                    </div>

                    <div className="Menu_item_container">
                    <Link to="/contact" className="Menu_Buttons"><li ><Phone className="Custom_Svg"/></li></Link>

                      <span className="mytooltip">Contact Me</span>
                    </div>
                    <div className="Menu_item_container">
                    <Link to="/blog" className="Menu_Buttons"><li ><Blog className="Custom_Svg"/></li></Link>
                      <span className="mytooltip">Blog</span>
                    </div>
                

                  <div className="Menu_item_container">
                      <DarkMode passData={props.getTheme}/>
                  </div>


                </ul>
                
            </div>
            
           
      </ProSidebar>
        </div>
 
    </>
  );
}
export default SideMenu;