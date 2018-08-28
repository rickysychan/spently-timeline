import React from 'react'
import { shallow } from 'enzyme'
import TableDetails from './TableDetails'

const mockSelectCustomer = jest.fn()
const mockCustomer = {sample: 'example'}
const tableDetails = shallow(<TableDetails 
                                customer={mockCustomer} 
                                selectCustomer={mockSelectCustomer}
                                />)

describe('Table', () => {
    it('should render properly', () => {
        expect(tableDetails).toMatchSnapshot()
    })
    describe('when a user clicks a row', () => {
        it('should invoke the selectCustomer method from `props`', () => {
            tableDetails.find('.table-details').simulate('click')
            expect(mockSelectCustomer).toHaveBeenCalledWith(mockCustomer)
        })
    })
})