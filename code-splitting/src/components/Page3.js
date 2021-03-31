import React from 'react'
import logo from '../logo.svg'

const Page3 = ({ onRouteChange }) => 
    <div className="App">
        <h1>Page 3</h1>
        <img src={logo} alt="" />
        <button onClick={() => onRouteChange('page1')}>Page 1</button>
        <button onClick={() => onRouteChange('page2')}>Page 2</button>
        <button className="disabled">Page 3</button>
    </div>

    export default Page3;
