import React from 'react';
import '../css/main.scss';
import '../App.css';
import 'boxicons';
import Hero from '../components/callToAction';
// import Testing from './components/testingComponent';


import '../css/main.scss';
import {  Row, Col } from 'react-bootstrap';
// import GlitchClip from 'react-glitch-effect/core/Clip';
function Home() {
  
  return (
        <div className="container-fluid">
        
            <Row className="hero_content">
              <Col xs={12} md={6} >
                <Hero/>
              </Col>
              <Col xs={12} md={6}>

              </Col>
            </Row>
            

        </div>
  );
}

export default Home;
