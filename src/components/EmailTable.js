import React, {Component} from 'react'
import TableDetails from './TableDetails'

export default class EmailTable extends Component {
    componentDidMount() {
    // uncomment below to test error boundary
    // throw new Error("An error has occured in Buggy component!");
    }
    render(){
            return(
                <div className='table'>    
                    <table className="table--card" cellSpacing="0" cellPadding="0"> 
                        <tbody className='timeline-details'>
                            <tr className="table__row" id='table-header'>
                                <th className='table__row__heading subheading-left subheading-email'
                                    onClick={() => this.props.sortByAlphabet('email')}
                                >Email</th>
                                <th className='table__row__heading subheading-right subheading-emailType'
                                    onClick={() => this.props.sortByAlphabet('emailType')}
                                >Email Type</th>
                                <th className='table__row__heading subheading-right subheading-timestamp'
                                    onClick={() => this.props.sortByHighest('timestamp') }
                                >Time Stamp</th>
                            </tr>
                            { this.props.data.map( client => {
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