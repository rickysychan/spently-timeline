import React, {Component} from 'react'
import Data from '../data/data.json'
import TableDetails from './TableDetails'
import Header from './Header'
import { sortByHighest, sortAlphabetically } from '../helper'
import '../css/App.css'
import '../css/colors.css'

export default class App extends Component{
    state = {
        data: []
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
                <div className='table'>
                    <table className="table--card" cellSpacing="0" cellPadding="0"> 
                        <tbody className='timeline-details'>
                            <tr className="table__row" id='table-header'>
                                <th className='table__row__heading subheading-left subheading-email'
                                    onClick={() => this.sortByAlphabet('email')}
                                >Email</th>
                                <th className='table__row__heading subheading-right subheading-emailType'
                                    onClick={() => this.sortByAlphabet('emailType')}
                                >Email Type</th>
                                <th className='table__row__heading subheading-right subheading-timestamp'
                                    onClick={() => this.sortByHighest('timestamp') }
                                >Time Stamp</th>
                            </tr>
                            { this.state.data.map( client => {
                                    return(
                                        <TableDetails 
                                            key={client._id}
                                            email={client.email} 
                                            emailType={client.emailType}
                                            timestamp={parseInt((client.timestamp/1000).toString(), 10)}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}
