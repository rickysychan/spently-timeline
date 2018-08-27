import React from 'react'
import {shallow} from 'enzyme'
import EmailTable from './EmailTable'
import data from '../data/data.json'

let mockSortByAlphabet = jest.fn()
let mockSortByHighest = jest.fn()

let emailTable = shallow(
    <EmailTable 
        data={data} 
        sortByAlphabet={mockSortByAlphabet} 
        sortByHighest={mockSortByHighest}
        />)

describe('Email Table', () => {
    it('should render properly', () => {
        expect(emailTable.find('.table').exists()).toBe(true)
    })

    it('renders a list of emails from data', () => {
        expect(emailTable.find('.timeline-details').children().length).toEqual(data.length + 1)
    })
    describe('when a user clicks the email subheader', () => {
        it('should invoke the sortByAlphabet function in `props`', () => {
            emailTable.find('.subheading-email').simulate('click')
            expect(mockSortByAlphabet).toHaveBeenCalledWith('email')
        })    
    })
    describe('when a user clicks the emailType subheader', () => {
        it('should invoke the sortByAlphabet function in `props`', () => {
            emailTable.find('.subheading-emailType').simulate('click')
            expect(mockSortByAlphabet).toHaveBeenCalledWith('emailType')
        })    
    })
    describe('when a user clicks the TimeStamp subheader', () => {
        it('should invoke the sortByAlphabet function in `props`', () => {
            emailTable.find('.subheading-timestamp').simulate('click')
            expect(mockSortByHighest).toHaveBeenCalledWith('timestamp')
        })    
    })
})