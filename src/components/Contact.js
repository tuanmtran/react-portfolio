import React from 'react';
import Example from './Summary';
class Contact extends React.Component {
    render() {
        return (
            


            <div id="Contact" class="box-border h-1/2 ">
                <a class="flex" onClick={this.displaySummary}>
                <button class="animate-pulse ring-4 ring-purple-600 shadow rounded-md p-4 max-w-sm w-full mx-auto font-Roboto text-4xl font-semibold">
                    TL;DR
                </button>
                </a>
                <Example></Example>
            </div>
        )
    }

}

export default Contact