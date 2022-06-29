import callClass from '../src/callClass'
import Util from '../src/class'

jest.mock('../src/class')

test('是否被调用', () => {
    callClass()
    expect(Util).toHaveBeenCalledTimes(1)
})
