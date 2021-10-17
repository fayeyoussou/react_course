import React from "react";
// import react from "react";
import ReactDOM from 'react-dom';
import Header from './views/header'
const App = () => (
    <>
        <Header/>
    </>
)
/**
 * / return  React.createElement('h1',{className:'title'},React.createElement('div',{},'Voila'))
 * this can be done but it is too complicate and we dont want complication
 */ 
    
ReactDOM.render(<App/>,document.querySelector('#root'))
