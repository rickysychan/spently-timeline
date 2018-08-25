import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

describe('app', () => {
    it('should render properly', () => {
        expect(app).toMatchSnapshot()
    })    
})