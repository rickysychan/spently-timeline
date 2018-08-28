import React from 'react'
import PropTypes from 'prop-types'
import '../css/CustomerInfo.css'

const customerInfo = props => {
    if(!props.selectedCustomer){
        return(
            <div className='customerInfo-no-customer'></div>
        )
    }
        else {
            return(
                <div className='customer-info'>
                    <img className='customerInfo-image' src={props.selectedCustomer.picture} alt='customer'/>
                    <h6 className='customerInfo-details'>Full Name: {props.selectedCustomer.name.first + " " + props.selectedCustomer.name.last}</h6>
                    <h6 className='customerInfo-details'>Balance: {props.selectedCustomer.balance}</h6>
                    <h6 className='customerInfo-details'>Active: {props.selectedCustomer.isActive.toString()}</h6>
                    <h6 className='customerInfo-details'>Age: {props.selectedCustomer.age}</h6>
                    <h6 className='customerInfo-details'>About: {props.selectedCustomer.about}</h6>
                    
                    <h6 className='customerInfo-details'>Address: {props.selectedCustomer.address}</h6>
                    <h6 className='customerInfo-details'>Friends: {props.selectedCustomer.friends.map( (friend, index) => 
                            <span key={index}> {friend.name + ", "} </span>
                             )}</h6>
                    <h6 className='customerInfo-details'>Tags: {props.selectedCustomer.tags.map( (tag, index)  => 
                            <span key={index}>{tag + ', '}</span> 
                            )}</h6>
                    <button 
                        className='btn cta error customerInfo-btn'
                        onClick={() => props.selectCustomer(null)}
                        >Close</button>
                </div>
            )
        }
    }

customerInfo.propTypes = {
    selectedCustomer: PropTypes.object,
    selectCustomer: PropTypes.func.isRequired
}

export default customerInfo