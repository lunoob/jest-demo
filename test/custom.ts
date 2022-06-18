import { sum } from '../src/math'
import { test, expect } from '../src/jest'

test('期待结果为: 4', () => {
    expect(sum(2, 3)).toBe(4)
})

console.log(__dirname)
