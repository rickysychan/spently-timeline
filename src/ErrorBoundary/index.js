import React, { Component } from 'react'
import Logo from '../imgs/spentlyIconBlack'
import './errorBoundary.css'
  
export default class ErrorBoundary extends Component {

  state = { 
    hasError: false,
    info: '',
    error: ''
  }

  componentDidCatch (error, info) {
    this.setState({ 
      hasError: true,
      error: error.toString(),
      info: info.componentStack
    })
  }
  render () {
    if (this.state.hasError) {
      return (
        <div className='emailTable-table errorBoundary'>
          <Logo className='logo'/>
          <h1>Uh-Oh! Something went wrong.</h1>
            <h3 className='errorBoundary-error'>{this.state.error}</h3>
            <h4 className='errorBoundary-info'>Info: {this.state.info}</h4>
        </div>
      )
    }
    return this.props.children
  }
}
