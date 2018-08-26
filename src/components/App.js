import React, {Component} from 'react'
import Data from '../data/data.json'
import TableDetails from './TableDetails'
import { sortByLowest } from '../helper'
import '../css/App.css'

export default class App extends Component{
    state = {
        data: []
    }
    componentWillMount(){
        const sortedData = sortByLowest(Data, 'timestamp')
        this.setState({ data: sortedData })
    }
    
    render(){
        return(
            <div className='table'>
                <table className="table--card"> 
                    <tbody className='timeline-details'>
                        <tr className="table__row">
                            <th className="table__row__heading">Email</th>
                            <th className="table__row__heading">Email Type</th>
                            <th className="table__row__heading">Time Stamp</th>
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
        )
    }
}
