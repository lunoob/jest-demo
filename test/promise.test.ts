import { fetchData } from '../src/promise'

test('Promise', () => {
    return fetchData().then(result => {
        expect(result).toMatch('baidu')
    })
})
