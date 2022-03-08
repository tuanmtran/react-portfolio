import React, { Component } from 'react';
import HeroSection from './Hero';
import Hobbies from './Hobbies';
import AboutMe from './AboutMe';
import { NavbarPage } from './NavBar';
import Current from './Current';
import Contact from './Contact';

class App extends Component {
    render() {
        return(
            <div id="container">
                <div class="sticky top-0 z-40">
                    <NavbarPage></NavbarPage>
                </div>
                <HeroSection></HeroSection> 
                <div class ="container mx-auto py-64"> 
                    <AboutMe></AboutMe>
                    <Current></Current>
                    <Hobbies></Hobbies>
                    <Contact></Contact>
                </div>
            </div>
        );
    }
}

export default App;