import React from 'react'
import logo from '../logo.svg'

const Page2 = ({ onRouteChange }) => 
    <div className="App">
        <h1>Page 2</h1>
        <img src={logo} alt=""/>
        <button onClick={() => onRouteChange('page1')}>Page 1</button>
        <button onClick={() => onRouteChange('page3')}>Page 3</button>
    </div>

    export default Page2;
