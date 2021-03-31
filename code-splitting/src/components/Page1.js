import React from 'react'
import logo from '../logo.svg'

const Page1 = ({ onRouteChange }) => 
    <div className="App">
        <h1>Page 1</h1>
        <img src={logo} alt=""/>
        <button className="disabled">Page 1</button>
        <button onClick={() => onRouteChange('page2')}>Page 2</button>
        <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>

    export default Page1;
