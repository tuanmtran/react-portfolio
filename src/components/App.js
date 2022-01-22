import React, { Component } from 'react';
import CardPage from './Cards';
import HeroSection from './Hero';
import HobbiesBox from './Hobbies';
import AboutMe from './AboutMe';
import { NavbarPage } from './NavBar';
import Current from './Current';
import PastBox from './Past';
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
                    <HobbiesBox></HobbiesBox>
                    <Contact></Contact>
                </div>
            </div>
        );
    }
}

export default App;