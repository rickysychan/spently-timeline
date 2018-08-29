import React, {Component} from 'react'
import Data from '../data/data.json'
import EmailTable from './EmailTable'
import Header from './Header'
import ErrorBoundary from '../ErrorBoundary'
import CustomerInfo from './CustomerInfo'
import { sortNumerically, sortAlphabetically } from '../helper'
import '../css'

export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedCustomer: null,
        }
        this.sortByAlphabet = this.sortByAlphabet.bind(this);
        this.sortByHighestNumber = this.sortByHighestNumber.bind(this);
        this.selectCustomer = this.selectCustomer.bind(this);
      }
    componentWillMount(){
        const sortedData = sortNumerically(Data, 'timestamp')
        this.setState({ data: sortedData })
    }

    sortByAlphabet(param){
        const sortedData = sortAlphabetically(Data, param)
        this.setState({ data: sortedData})
    }

    sortByHighestNumber(param){
        const sortedData = sortNumerically(Data, param)
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
                            sortByHighestNumber={this.sortByHighestNumber}
                            selectCustomer={this.selectCustomer}
                            />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CustomerInfo 
                            selectedCustomer={this.state.selectedCustomer}
                            selectCustomer={this.selectCustomer}
                            />
                    </ErrorBoundary>
                </div>
        )
    }
}
