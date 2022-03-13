import React from 'react';
class AboutMe extends React.Component {
    render() {
        return (
            <div id="AboutMe" class="font-Times box-border pb-96 overflow-hidden">
                <h1 class="relative inset-x-8 md:inset-x-1/4 top-16 text-6xl md:text-7xl font-semibold">README.
                    <p class="animate-bounce relative inset-x-36 md:inset-x-44 w-6 h-3 text-xl">^</p>
                    <p class=" relative inset-x-28 md:inset-x-36 text-2xl font-semibold">about</p>
                </h1>
                <div class="box-border h-1/2 w-1/2">
                    <p class="relative inset-y-20 inset-x-1/2 flex-auto lg:pr-16 lg:pl-16 text-xl"> 
                    Stranded far far from my hometown of Vietnam, I'm currently pursuing a degree in Computer Science @UCSD </p>
                    
                    <p class="relative inset-y-20 inset-x-1/2 flex-auto pt-8 lg:pr-16 lg:pl-16 text-xl"> 
                    Just like my own life, this website is always a WIP, but feel free to look around, and always hit me up! </p>
                </div>
            </div>
        )
    }

}

export default AboutMe