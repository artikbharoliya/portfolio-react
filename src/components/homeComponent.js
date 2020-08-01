import React from 'react';
import '../css/main.scss';
import {Switch, Route} from "react-router-dom";
import About from '../sections/About';
import Home from '../sections/Home';
import Contact from '../sections/Contact';
import Project from '../sections/Project';
import Blog from '../sections/Blog';

const HomeComponent = (props) =>{

    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog" component={Blog} />
        </Switch>
    );

}


export default HomeComponent;