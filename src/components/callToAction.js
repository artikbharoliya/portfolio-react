import React from 'react';
import '../css/main.scss';
import '../App.css';
import 'boxicons';

function Hero(){
    return(
            <>
                <div className="polkas">
                <svg  viewBox="0 0 1127 490" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector 1" d="M593 49.9182C468.492 -19.4529 316.861 -11.3223 187.148 49.9182C63.3326 108.374 -69.8021 217.409 42.031 352.978C153.864 488.546 874.383 506.106 1019.5 477.5C1164.62 448.894 1177.5 234.5 960.5 169C831.744 130.136 747.5 136 593 49.9182Z" fill="#32E0C4"/>
                </svg>



                </div>
                <div className="Call_to_action">

                <div>Hello, I'm &nbsp;<span>Artik Bharoliya</span></div>

                
                <p>I am a Frontend Web-Developer. I make beautiful websites which users love to use. &nbsp;I use React as my weapon to tackle any "Front-end challenge". I make intuitive and pleasure to look websites keeping user in the center.</p>
                <div className="Call_Buttons_Container">
                    <div>
                    <a href="#">My Resume</a>
                
                    </div>
                    <div>
                    <a href="#">Hire Me</a>
                
                    </div>
                
                </div>
                <div className="SocialLinks">

                    <ul>
                        <a href="#"><li><box-icon name='facebook-circle' type='logo' color='#32e0c4' size="md" ></box-icon></li></a>
                        <a href="#"><li><box-icon name='github' type='logo' color='#32e0c4' size="md"></box-icon></li></a>
                        <a href="#"><li><box-icon name='linkedin-square' type='logo' color='#32e0c4' size="md"></box-icon></li></a>
                        <a href="#"><li><box-icon name='instagram' type='logo' color='#32e0c4' size="md"></box-icon></li></a>

                    </ul>
                </div>
                
                </div>
        </>
    );
}

export default Hero;
