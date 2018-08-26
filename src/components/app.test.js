import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import data from '../data/data.json'

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
        expect(app.find('.table-timeline').children().length).toEqual(data.length)
    })
})