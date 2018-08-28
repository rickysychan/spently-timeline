import React from 'react'
import {shallow} from 'enzyme'
import CustomerInfo from './CustomerInfo'
 
const sample = { 
        name: {first: "Eric", 
               last: 'hartman'}, 
        friends:['ioo', 'foo', 'moe'], 
        tags:['goo', 'moo', 'shoe'], 
        age: 29, 
        isActive: false, }

const mockSelectCustomer = jest.fn()
const customerInfo = shallow(<CustomerInfo 
                                selectedCustomer={sample} 
                                selectCustomer={mockSelectCustomer}/>)
const customerInfoEmpty = shallow(<CustomerInfo selectCustomer={mockSelectCustomer}/>)

describe('Client Info', () => {
    it('should render properly', () => {
        expect(customerInfo).toMatchSnapshot()
    })
    describe('when there is an object in selectedCustomer of `props`', () => {
        it('should render the customer info div', () => {
            expect(customerInfo.find('.customer-info').exists()).toBe(true)
        })
    })
    describe('when there isnt an object in selectedCustomer of `props`', () => {
        it('should render nothing', () => {
            expect(customerInfoEmpty.find('.customerInfo-no-customer').exists()).toBe(true)
        })
    })
    describe('when the user clicks the close button', () => {
        it('should invoke the selectCustomer method with null has parameter', ()=> {
            customerInfo.find('.customerInfo-btn').simulate('click')
            expect(mockSelectCustomer).toHaveBeenCalledWith(null)
        })
    })
})