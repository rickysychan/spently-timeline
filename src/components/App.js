import React, {Component} from 'react'
import Data from '../data/data.json'
import Table from './Table'
import { sortByLowest } from '../helper'

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
            <div className='table-timeline'>
                { this.state.data.map( client => {
                        return(
                            <Table 
                                key={client._id}
                                email={client.email} 
                                emailType={client.emailType}
                                timestamp={parseInt((client.timestamp/1000).toString(), 10)}
                            />
                        )
                    })
                }
            </div>
        )
    }
}
