import React from 'react'
import {shallow} from 'enzyme'
import EmailTable from './EmailTable'
import data from '../data/data.json'

let mockSortByAlphabet = jest.fn()
let mockSortByHighestNumber = jest.fn()

let emailTable = shallow(
    <EmailTable 
        data={data} 
        sortByAlphabet={mockSortByAlphabet} 
        sortByHighestNumber={mockSortByHighestNumber}
        />)

describe('Email Table', () => {
    it('should render properly', () => {
        expect(emailTable).toMatchSnapshot()
    })

    it('renders a list of emails from data', () => {
        expect(emailTable.find('.emailTable-details').children().length).toEqual(data.length + 1)
    })
    describe('when a user clicks the email subheader', () => {
        it('should invoke the sortByAlphabet function in `props`', () => {
            emailTable.find('.emailTable-subheading-email').simulate('click')
            expect(mockSortByAlphabet).toHaveBeenCalledWith('email')
        })    
    })
    describe('when a user clicks the emailType subheader', () => {
        it('should invoke the sortByAlphabet function in `props`', () => {
            emailTable.find('.emailTable-subheading-emailType').simulate('click')
            expect(mockSortByAlphabet).toHaveBeenCalledWith('emailType')
        })    
    })
    describe('when a user clicks the TimeStamp subheader', () => {
        it('should invoke the sortByAlphabet function in `props`', () => {
            emailTable.find('.emailTable-subheading-timestamp').simulate('click')
            expect(mockSortByHighestNumber).toHaveBeenCalledWith('timestamp')
        })    
    })
})