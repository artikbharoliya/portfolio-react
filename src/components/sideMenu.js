import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader, SidebarContent,SidebarFooter} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// import { ReactComponent as SunIcon } from '../assets/sun.svg';
// import { ReactComponent as Film } from '../assets/film.svg';
import { ReactComponent as Phone } from '../assets/phone.svg';
import { ReactComponent as About } from '../assets/user.svg';
import { ReactComponent as Folder } from '../assets/folder.svg';
import { ReactComponent as Film } from '../assets/film.svg';
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Blog } from '../assets/Edit.svg';
import '../css/main.scss';
import DarkMode from '../components/darkmode';
import { OverlayTrigger } from 'react-bootstrap';
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
                    <li className="Menu_Buttons"><Home className="Custom_Svg"/></li>
                    <span className="mytooltip">Home</span>
                  </div>
                  
                  
                  <div className="Menu_item_container">
                    <li className="Menu_Buttons"><About className="Custom_Svg"/></li>
                    <span className="mytooltip">About Me</span>
                  </div>

                  <div className="Menu_item_container">
                    <li className="Menu_Buttons"><Folder className="Custom_Svg"/></li>
                    <span className="mytooltip">Project</span>
                  </div>

                  <div className="Menu_item_container">
                    <li className="Menu_Buttons"><Phone className="Custom_Svg"/></li>
                    <span className="mytooltip">Contact Me</span>
                  </div>
                  <div className="Menu_item_container">
                    <li className="Menu_Buttons"><Blog className="Custom_Svg"/></li>
                    <span className="mytooltip">Blog</span>
                  </div>

                  <div className="Menu_item_container">
                      <DarkMode passData={props.getTheme}/>
                  </div>


                </ul>
                
            </div>
            
            {/* <Menu iconShape="circle" className="Menu_items">
                <MenuItem icon={<Folder />} className="Menu_Buttons"></MenuItem>
                <MenuItem icon={<Phone />}></MenuItem>
                <MenuItem icon={<Folder />}></MenuItem>
            </Menu> */}
      </ProSidebar>
        </div>
 
    </>
  );
}
export default SideMenu;