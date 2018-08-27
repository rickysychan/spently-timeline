import { convertTime, sortByHighest, sortAlphabetically, letterCompare } from './index'

describe('Time Converter', () => {
    it('converts time from unix to readable time', () => {
        expect(convertTime(1535237063)).toEqual('Aug-25-2018 18:44:23')
    })
})

describe('Sort by lowest parameter', () => {
    it('sorts an array of objects by a given value from highest to lowest', () => {
        const sample = [ { m:1 }, { m:2 }, { m:3 } ]
        const expectedOutput = [ { m:3 }, { m:2 }, { m:1 } ]

        expect(sortByHighest(sample, 'm')).toEqual(expectedOutput)
    })
})

describe('Sort Alphabetically by parameter', () => {
    it('sorts an array of objects by a given parameter alphabetically', () => {
        const sample = [ {m: 'noop'}, {m: "Koop"}, {m: "Boop"} ]
        const expectedOutput = [ {m: 'Boop'}, {m: "Koop"}, {m: "noop"} ]
        expect(sortAlphabetically(sample, 'm')).toEqual(expectedOutput)
    })
})

describe('compare letters alphabetically', () => {
    const text1 = 'a'
    const text2 = 'b'
    it('should return -1 if the first letter input is greater than the second', () => {
        expect(letterCompare(text1, text2)).toEqual(-1)
    })
    it('should return -1 if the second letter input is greater than the first', () => {
        expect(letterCompare(text2, text1)).toEqual(1)
    })
    it('should return 0 if the first and second letter is the same', () => {
        expect(letterCompare(text1, text1)).toEqual(0)
    })
})