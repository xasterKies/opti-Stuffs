import React, { Component } from 'react'
import './App.css';
import Page1 from './components/Page1' 


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
    //No codespliting
    this.setState({route: route})

    //with codsplitting
    if (route === 'page1') {
      this.setState({route: route})
    } else if (route === 'page2') {
      import('./components/Page2')
    } else if (route === 'page3') {
      import('./components/Page3')
    }
  }
  render() {
    // <h1>Hello pages</h1>
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page2') {
    //   return <Page2 onRouteChange={this.onRouteChange}/>
    // } else if (this.state.route === 'page3'){
    //   return  <Page3 onRouteChange={this.onRouteChange}/>
    // } 

    //When actually adding codespliting
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else {
      return <this.state.component onRouteChange={this.onRouteChange}/>
    }
}
}

export default App;
