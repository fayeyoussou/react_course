import React from "react";
// import react from "react";
import ReactDOM from 'react-dom';
const App = () => (
    <>
        <h1>ceci est le premier</h1>
        <h2>ceci est le second</h2>
    </>
)
/**
 * / return  React.createElement('h1',{className:'title'},React.createElement('div',{},'Voila'))
 * this can be done but it is too complicate and we dont want complication
 */ 
    
ReactDOM.render(<App/>,document.querySelector('#root'))
