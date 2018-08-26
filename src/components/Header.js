import React from 'react'
import '../css/header.css'
import '../css/colors.css'

const Header = ({ title }) => 
    <div className='header'>
        <h2>{ title }</h2>
        <h5>Jun 1st, 2018 - July 1st, 2018</h5>
        {/* TO DO: Hook up component to date filter  */}
    </div>

export default Header