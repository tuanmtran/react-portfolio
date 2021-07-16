import React, { Component } from 'react';
import CardPage from './Cards';
import HeroSection from './Hero';
import HobbiesBox from './Hobbies';
import InterestsBox from './InterestSect';
import { NavbarPage } from './NavBar';
import OngoingBox from './Ongoing';
import PastBox from './Past';

class App extends Component {
    render() {
        return(
            <div id="container">
                <NavbarPage></NavbarPage>
                <HeroSection></HeroSection>
                <InterestsBox></InterestsBox>
                <OngoingBox></OngoingBox>
                <PastBox></PastBox>
                <HobbiesBox></HobbiesBox>
            </div>
        );
    }
}

export default App;