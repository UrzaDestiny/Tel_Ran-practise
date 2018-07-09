import React, {Component} from 'react'

class Calculator extends Component {

    render(){
        return(
            <div>
                <input type='number' id='fromValue'/>
                <select id='selFrom'/>
                <input id='res'/>
                <select id='selTo'/>
                <button id='calc'>Calculate</button>
            </div>
        )
    }
}

export default Calculator