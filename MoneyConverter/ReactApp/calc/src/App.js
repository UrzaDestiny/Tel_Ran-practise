import React, { Component } from 'react'

// const fruits = [{value: ‘grapefruit’, title: ‘Grapefruit’}…];
const currencies = [{value: 'eur', title: 'EUR'},{value:'usd', title:'USD'}];

let xhr = new XMLHttpRequest(); //запрос
let obj ={}; // расджейсоненый обьект (ответ на запрос)
let rates = {}; // забрали у обьекта рэйты (мап)
let currs = {}; // список ключей от рэйтов (массив)

xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return;

    obj = JSON.parse(xhr.response);
    console.log(obj);
    rates = obj.rates;
    rates[obj.base] = 1;
    currs = Object.keys(rates);
    console.log(obj);
};

class Calculator extends Component {

    render() {
            return (
                <div>
                    <input type="number" id="fromValue"/>

                    <select>{currencies.map(function (currencies) {
                        return(
                            <option value={currencies.value}>{currencies.title}</option>
                        )
                    })}
                    </select>

                    <input id="res"/>
                    <select id="selTo" />
                    <button id="calc" onClick={this.handleClick}>Calculate</button>
                </div>
            )
    }

}

export default Calculator

// <select>
// {fruits.map(function (fruit) {
//     return (<option value={fruit.value}>{fruit.title}</option>
// })}
// </select>