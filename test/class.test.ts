import Util from '../src/class'

let util: Util

beforeAll(() => {
    util = new Util()
})

test('测试 Util 类的 a 方法', () => {
    expect(util.a('hello', 'world')).toMatch('hello world')
})
