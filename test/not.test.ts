import { sum } from '../src/math'

test('5 + 5 等于 10', () => {
    expect(sum(5, 5)).toBe(10)
    // expect(sum(5, 6)).not.toBe(10)
})
