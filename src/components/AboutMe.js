import React from 'react';
class AboutMe extends React.Component {
    render() {
        return (
            <div id="AboutMe" class="font-Times box-border h-screen w-sceen overflow-hidden">
                <h1 class="relative inset-x-1/4 top-16 text-6xl font-semibold">README.
                    <p class="animate-bounce relative inset-x-36 w-6 h-3 text-xl">^</p>
                    <p class=" relative inset-x-32 text-2xl font-semibold">abt</p>
                </h1>
                <div class="box-border h-1/3 w-1/2">
                    <p class="relative inset-y-20 inset-x-1/2 flex-auto md:pr-16 md:pl-16">Hi! fancy of you to find this site. 
                This is a little place where I like to showcase my works and projects, treat it as a personal vault if you will.
                So walk around, click on things, and always hit me up!</p>
                </div>
            </div>
        )
    }

}

export default AboutMe