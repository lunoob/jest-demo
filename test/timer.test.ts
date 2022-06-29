import { timerGame, infiniteTimerGame } from '../src/timer'
jest.useFakeTimers()

test('测试定时器 1 s 后执行', () => {
    const fn = jest.fn()
    timerGame(fn)
    jest.runAllTimers()
    expect(fn).toBeCalled()
    jest.clearAllTimers()
})

test('测试只执行在队列中的定时器任务', () => {
    const fn = jest.fn()
    infiniteTimerGame(fn)

    // jest.runAllTimers()
    jest.runOnlyPendingTimers()
    expect(fn).toHaveBeenCalledTimes(1)
})

test('测试只执行在时间范围内的定时器任务', () => {
    const fn = jest.fn()

    infiniteTimerGame(fn)
    jest.advanceTimersByTime(1000)
    expect(fn).toHaveBeenCalledTimes(1)
})
