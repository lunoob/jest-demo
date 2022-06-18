import Counter from '../src/counter'

let count: Counter

beforeAll(() => {
    console.log('global beforeAll')
    count = new Counter()
})

beforeEach(() => {
    console.log('global beforeEach')
    count = new Counter()
})

describe('global range', () => {
    beforeAll(() => {
        console.log('inner beforeAll')
    })

    beforeEach(() => {
        console.log('inner beforeEach')
    })

    describe('test action one', () => {
        beforeAll(() => {
            console.log('test beforeAll')
        })
        beforeEach(() => {
            console.log('test beforeEach')
        })

        test('count + 1', () => {
            count.addOne()
            expect(count.getValue()).toBe(1)
        })

        test('count - 1', () => {
            count.minusOne()
            expect(count.getValue()).toBe(-1)
        })
    })
})

describe('test action two', () => {
    test('count + 2', () => {
        count.addTwo()
        expect(count.getValue()).toBe(2)
    })

    test('count - 2', () => {
        count.minusTwo()
        expect(count.getValue()).toBe(-2)
    })
})
