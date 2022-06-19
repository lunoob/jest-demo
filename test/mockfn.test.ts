import { callbackFn, createObj } from '../src/mockfn'

test('callback is execute ?', () => {
    const func = jest.fn()
    callbackFn(func)
    expect(func).toBeCalled()
})

test('callback is execute ?', () => {
    const func = jest.fn()
    func.mockReturnValueOnce({ name: 'luoob' })
    callbackFn(func)
    // expect(func).toBeCalled()
    // expect(func.mock.calls.length).toBeGreaterThan(0)
    // expect(func.mock.results[0].value).toEqual({ name: 'luoob' })
    console.log(func.mock)
})

test('对调函数被实例化', () => {
    const func = jest.fn()
    createObj(func)
    expect(func.mock.instances.length).toBeGreaterThan(0)
})
