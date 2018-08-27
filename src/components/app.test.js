import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import data from '../data/data.json'
import {sortAlphabetically, sortByHighest} from '../helper/index'

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
    describe('when the SortByAlphabet function is invoked with a parameter', () => {
        it('should sort an array alphabetically and set in `state`', () => {
            app.instance().sortByAlphabet('email')
            expect(app.state().data).toEqual(sortAlphabetically(data, 'email'))
        })
    })
    describe('when the SortByHighest function is invoked with a parameter', () => {
        it('should sort an array numerically and set in `state`', () => {
            app.instance().sortByHighest('timestamp')
            expect(app.state().data).toEqual(sortByHighest(data, 'timestamp'))
        })
    })
})