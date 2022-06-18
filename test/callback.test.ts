import { fetchDataCb } from '../src/promise'

// Don't do this!
test('the data is peanut butter', () => {
    function callback (error: any, data: any) {
        if (error) {
            throw error
        }
        expect(data).toBe('peanut butter')
    }

    fetchDataCb(callback)
})

test('the data is peanut butter use done', done => {
    function callback (error: any, data: any) {
        if (error) {
            return done(error)
        }
        try {
            expect(data).toBe('peanut butter')
            done()
        } catch (error) {
            done(error)
        }
    }

    fetchDataCb(callback)
})
