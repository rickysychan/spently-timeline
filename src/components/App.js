import React, {Component} from 'react'
import Data from '../data/data.json'
import EmailTable from './EmailTable'
import Header from './Header'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { sortByHighest, sortAlphabetically } from '../helper'
import '../css/App.css'
import '../css/colors.css'

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
        this.sortByAlphabet = this.sortByAlphabet.bind(this);
        this.sortByHighest = this.sortByHighest.bind(this);
      }
    componentWillMount(){
        const sortedData = sortByHighest(Data, 'timestamp')
        this.setState({ data: sortedData })
    }

    sortByAlphabet(param){
        const sortedData = sortAlphabetically(Data, param)
        this.setState({ data: sortedData})
    }

    sortByHighest(param){
        const sortedData = sortByHighest(Data, param)
        this.setState({ data: sortedData})
    }
    
    render(){
        return(
                <div className='card'>
                    <Header className='header' title='Email Timeline' />
                    <ErrorBoundary>
                        <EmailTable 
                            data={this.state.data} 
                            sortByAlphabet={this.sortByAlphabet}
                            sortByHighest={this.sortByHighest}
                            />
                    </ErrorBoundary>
                </div>
        )
    }
}
