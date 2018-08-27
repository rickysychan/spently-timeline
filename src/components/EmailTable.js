import React from 'react'
import TableDetails from './TableDetails'


const EmailTable = ({ data, sortByAlphabet, sortByHighest }) =>
    <div className='table'>    
        <table className="table--card" cellSpacing="0" cellPadding="0"> 
            <tbody className='timeline-details'>
                <tr className="table__row" id='table-header'>
                    <th className='table__row__heading subheading-left subheading-email'
                        onClick={() => sortByAlphabet('email')}
                    >Email</th>
                    <th className='table__row__heading subheading-right subheading-emailType'
                        onClick={() => sortByAlphabet('emailType')}
                    >Email Type</th>
                    <th className='table__row__heading subheading-right subheading-timestamp'
                        onClick={() => sortByHighest('timestamp') }
                    >Time Stamp</th>
                </tr>
                { data.map( client => {
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

export default EmailTable