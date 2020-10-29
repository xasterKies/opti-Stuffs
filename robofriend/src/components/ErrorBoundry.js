import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        
    }

    render() {
        if (this.state.hasError) {
            return <h1>0oops. That is not good.</h1>
        }
       return this.props.children 
    }

}
