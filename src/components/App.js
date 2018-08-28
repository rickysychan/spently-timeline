import React, {Component} from 'react'
import Data from '../data/data.json'
import EmailTable from './EmailTable'
import Header from './Header'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import CustomerInfo from './CustomerInfo'
import { sortByHighest, sortAlphabetically } from '../helper'
import '../css/App.css'
import '../css/colors.css'
import '../css/font.css'

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedCustomer: null,
        }
        this.sortByAlphabet = this.sortByAlphabet.bind(this);
        this.sortByHighest = this.sortByHighest.bind(this);
        this.selectCustomer = this.selectCustomer.bind(this);
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

    selectCustomer(selectedCustomer){
        this.setState({selectedCustomer})
    }
    
    render(){
        return(
                <div className='app-card'>
                    <Header className='app-header' title='Email Timeline' />
                    <ErrorBoundary>
                        <EmailTable 
                            data={this.state.data} 
                            sortByAlphabet={this.sortByAlphabet}
                            sortByHighest={this.sortByHighest}
                            selectCustomer={this.selectCustomer}
                            />
                    </ErrorBoundary>
                    <CustomerInfo 
                        selectedCustomer={this.state.selectedCustomer}
                        selectCustomer={this.selectCustomer}
                        />
                </div>
        )
    }
}
