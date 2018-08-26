import React from 'react'
import PropTypes from 'prop-types'
import { convertTime } from '../helper'
import '../css/Table.css'

const TableDetails = ({ email, emailType, timestamp }) => 
            <tr className="table__row">
                <td className="table__row__data">{email}</td>
                <td className="table__row__data">{emailType}</td>
                <td className="table__row__data">{convertTime(timestamp)}</td>
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