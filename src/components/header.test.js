import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

const header = shallow(<Header title='Header'/>)

describe('Header', () => {
    it('should render properly', () => {
        expect(header).toMatchSnapshot()
    })
})