import React from 'react'
import './App.css';
import Page1 from './components/Page1' 
import Page2 from './components/Page2' 
import Page3 from './components/Page3' 


function App() {
  return (
    <div className="App">

     <h1>Hello pages</h1>
     <Page1/>
     <Page2/>
     <Page3/>
    </div>
  );
}

export default App;
