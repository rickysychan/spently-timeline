import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => 
    <div className='header'>
        <h2 className='header-title'>{ title }</h2>
        <h6 className='header-date'>Jun 1st, 2018 - July 1st, 2018</h6>
        {/* TO DO: Hook up component to date filter  */}
    </div>

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header