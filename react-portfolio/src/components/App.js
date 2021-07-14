import React, { Component } from 'react';
import CardPage from './Cards';
import HeroSection from './Hero';
import { NavbarPage } from './NavBar';

class App extends Component {
    render() {
        return(
            <div id="container-wrap">
                <NavbarPage></NavbarPage>
                    <HeroSection></HeroSection>
            </div>
        );
    }
}

export default App;