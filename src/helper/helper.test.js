import { convertTime, sortByLowest } from './index'

describe('Time Converter', () => {
    it('converts time from unix to readable time', () => {
        expect(convertTime(1535237063)).toEqual('Aug-25-2018 18:44:23')
    })
})

describe('Sort by lowest parameter', () => {
    it('sorts an array of objects by a given value from lowest to heighest', () => {
        const sample = [ { m:1 }, { m:2 }, { m:3 } ]
        const expectedOutput = [ { m:3 }, { m:2 }, { m:1 } ]

        expect(sortByLowest(sample, 'm')).toEqual(expectedOutput)
    })
})
