import React from 'react';
import CardPage from './Cards';
class Current extends React.Component {
    render() {
        return (
            <div id="Ongoing" class="box-border h-screen w-sceen overflow-hidden">
                <h1 class="justify-start relative inset-x-1/2 font-Roboto text-6xl font-semibold">Curr.</h1>
                <CardPage></CardPage>
            </div>
        )
    }

}


export default Current