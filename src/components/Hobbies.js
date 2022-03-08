import React from 'react';
import Example from './HobbiesBox';
class Hobbies extends React.Component {
    render() {
        return (
            <div id="Hobbies" class="box-border pb-48 w-sceen">
                <h1 class="font-Roboto text-6xl font-semibold"> <strike>Addictions</strike> Hobbies.</h1>
                <Example></Example>
            </div>
        )
    }
}


export default Hobbies;