import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import data from '../data/data.json'
import { sortAlphabetically} from '../helper'

const app = shallow(<App />)

describe('app', () => {
    it('should render properly', () => {
        expect(app).toMatchSnapshot()
    })    
    describe('when the component initializes', () => {
        it('should retrieve the data and set it in `state`', () => {
            expect(app.state().data).toEqual(data)
        })
    })
    it('renders a list of emails from data', () => {
        expect(app.find('.timeline-details').children().length).toEqual(data.length + 1)
    })
    describe('when clicking the email table subheader', () => {
        it('should sort the emails alphabetically by email and set it to `state`', () => {
            app.find('.subheading-email').simulate('click')
            expect(app.state().data[0]).toEqual((sortAlphabetically(data, 'email'))[0])
            expect(app.state().data[3]).toEqual((sortAlphabetically(data, 'email'))[3])
            expect(app.state().data[5]).toEqual((sortAlphabetically(data, 'email'))[5])
        })
    })
    describe('when clicking the email table subheader', () => {
        it('should sort the emails alphabetically by email type and set it to `state`', () => {
            app.find('.subheading-emailType').simulate('click')
            expect(app.state().data[0]).toEqual((sortAlphabetically(data, 'emailType'))[0])
            expect(app.state().data[3]).toEqual((sortAlphabetically(data, 'emailType'))[3])
            expect(app.state().data[5]).toEqual((sortAlphabetically(data, 'emailType'))[5])
        })
    })
})