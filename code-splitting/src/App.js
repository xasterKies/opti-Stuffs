import React, { Component } from 'react'
import './App.css';
import Page1 from './components/Page1' 
import AsyncComponent from './components/AsyncComponent'


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
  

    //with codsplitting
    if (route === 'page1') {
      this.setState({route: route})
    } else if (route === 'page2') {
      import('./components/Page2').then((Page2) => {
        this.setState({route: route, component: Page2.default})
      })
    } else if (route === 'page3') {
      import('./components/Page3').then((Page3) => {
        this.setState({route: route, component: Page3.default})
      })
    }
  }
  render() {
    <h1>Hello pages</h1>
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange}/>
    } else if (this.state.route === 'page2') {
      const AsyncPage2 = AsyncComponent()
      return <Page2 onRouteChange={this.onRouteChange}/>
    } else if (this.state.route === 'page3'){
      return  <Page3 onRouteChange={this.onRouteChange}/>
    } 

    // //When actually adding codespliting
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange}/>
    // }
}
}

export default App;
