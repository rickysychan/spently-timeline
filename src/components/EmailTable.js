import React, {Component} from 'react'
import TableDetails from './TableDetails'
import '../css/EmailTable.css'

export default class EmailTable extends Component {
    componentDidMount() {
    // uncomment below to test error boundary
    // throw new Error("An error has occured in Buggy component!");
    }
    render(){
            return(
                <div className='emailTable-table'>    
                    <table className="table--card emailTable-table" cellSpacing="0" cellPadding="0"> 
                        <tbody className='emailTable-details'>
                            <tr className="table__row" id='emailTable-table-header'>
                                <th className='table__row__heading 
                                               emailTable-subheading-left 
                                               emailTable-subheading-email'
                                    onClick={() => this.props.sortByAlphabet('email')}
                                >Email</th>
                                <th className='table__row__heading 
                                               emailTable-subheading-right 
                                               emailTable-subheading-emailType'
                                    onClick={() => this.props.sortByAlphabet('emailType')}
                                >Email Type</th>
                                <th className='table__row__heading 
                                               emailTable-subheading-right
                                               emailTable-subheading-timestamp'
                                    onClick={() => this.props.sortByHighest('timestamp') }
                                >Time Stamp</th>
                            </tr>
                            { this.props.data.map( customer => {
                                    return(
                                        <TableDetails 
                                            key={customer._id}
                                            email={customer.email} 
                                            emailType={customer.emailType}
                                            timestamp={parseInt((customer.timestamp/1000).toString(), 10)}
                                            customer={customer}
                                            selectCustomer={this.props.selectCustomer}
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