import React, {Component} from 'react'
import TableDetails from './TableDetails'
import PropTypes from 'prop-types'

export default class EmailTable extends Component {
    componentDidMount() {
    // uncomment below to test error boundary
    // throw new Error("An error has occured in Buggy component!");
    }

    render(){
            return(
                <div className='emailTable-table'>    
                    <table className="emailTable-table" cellSpacing="0" cellPadding="0"> 
                        <tbody className='emailTable-details'>
                            <tr className='emailTable-table-header'>
                                <th className='emailTable-subheading-left 
                                               emailTable-subheading-email'
                                    onClick={() => this.props.sortByAlphabet('email')}
                                >Email</th>
                                <th className='emailTable-subheading-right 
                                               emailTable-subheading-emailType'
                                    onClick={() => this.props.sortByAlphabet('emailType')}
                                >Email Type</th>
                                <th className='emailTable-subheading-right
                                               emailTable-subheading-timestamp'
                                    onClick={() => this.props.sortByHighestNumber('timestamp') }
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

EmailTable.propTypes = {
    sortByHighestNumber: PropTypes.func.isRequired,
    sortByAlphabet: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        guid: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        emailType: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        balance: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        eyeColor: PropTypes.string.isRequired,
        name: PropTypes.object.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        registered: PropTypes.string.isRequired,
        latitude: PropTypes.string.isRequired,
        longitude: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired,
        range: PropTypes.array.isRequired,
        friends: PropTypes.array.isRequired,
        greeting: PropTypes.string.isRequired,
        favoriteFruit: PropTypes.string.isRequired
    }))
}
