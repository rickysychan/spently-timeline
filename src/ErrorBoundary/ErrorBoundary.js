import React, { Component } from 'react'
  
export default class ErrorBoundary extends Component {

  state = { 
    hasError: false,
    info: 'moo',
    error: 'moo'
  }

  componentDidCatch (error, info) {
    this.setState({ 
      hasError: true,
      info,
      error 
    })
  }
  render () {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
            <h3>Error: {this.state.error}</h3>
            <h4>Info: {this.state.info}</h4>
        </div>
      )
    }
    return this.props.children
  }
}
