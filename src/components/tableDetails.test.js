import React from 'react'
import { shallow } from 'enzyme'
import TableDetails from './TableDetails'

const tableDetails = shallow(<TableDetails />)

describe('Table', () => {
    it('should render properly', () => {
        expect(tableDetails).toMatchSnapshot()
    })
})