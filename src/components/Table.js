import React from 'react'
import PropTypes from 'prop-types'
import { convertTime } from '../helper'

const Table = ({ email, emailType, timestamp }) => 
    <table className="table"> 
        <tbody>
            <tr className="table__row">
                <th>Email</th>
                <th>Email Type</th>
                <th>Time Stamp</th>
            </tr>
            <tr className="table-data">
                <td className="table-email">{email}</td>
                <td className="table-emailType">{emailType}</td>
                <td className="table-timestamp">{convertTime(timestamp)}</td>
            </tr>
        </tbody>
    </table>

Table.propTypes = {
    email: PropTypes.string.isRequired,
    emailType: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
}

Table.defaultProps = {
    email: 'moo@gmail.com',
    emailType: 'mooo',
    timestamp: 123
}


export default Table