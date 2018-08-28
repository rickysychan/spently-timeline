import React from 'react'
import PropTypes from 'prop-types'
import { convertTime } from '../helper'
import '../css/TableDetails.css'
import '../css/colors.css'

const TableDetails = ({ email, emailType, timestamp, selectCustomer, customer }) => 
            <tr className='table-details' onClick={() => selectCustomer(customer)}>
                <td className='tableDetails-email'>{email}</td>
                <td className='tableDetails-secondary-detail'>{emailType}</td>
                <td className='tableDetails-secondary-detail'>{convertTime(timestamp)}</td>
            </tr>

TableDetails.propTypes = {
    email: PropTypes.string.isRequired,
    emailType: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
}

TableDetails.defaultProps = {
    email: 'moo@gmail.com',
    emailType: 'mooo',
    timestamp: 123
}


export default TableDetails