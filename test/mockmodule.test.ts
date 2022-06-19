import * as fn from '../src/mockfn'

jest.mock('../src/mockfn')

describe('fn', () => {
    test('fn.fetchData', () => {
        // @ts-ignore
        fn.fetchData.mockResolvedValue('hello world')
        return fn.fetchData().then(res => {
            expect(res).toBe('hello world')
        })
    })
})
