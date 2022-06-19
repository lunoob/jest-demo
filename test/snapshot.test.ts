import { generateConfig, generateAnotherConfig } from '../src/snapshot'

// test('测试 generateConfig 函数', () => {
//     expect(generateConfig()).toEqual({
//         domain: 'localhost',
//         post: 8080,
//         count: 8
//     })
// })

test('测试 generateConfig 函数', () => {
    expect(generateConfig()).toMatchInlineSnapshot(`
Object {
  "count": 8,
  "domain": "localhost",
  "post": 8080,
  "time": "2022-06-19 23:05:50",
}
`)
})

test('测试 generateAnotherConfig 函数', () => {
    expect(generateAnotherConfig()).toMatchInlineSnapshot({ time: expect.any(Date) }, `
Object {
  "count": 8,
  "domain": "localhost",
  "post": 8080,
  "time": Any<Date>,
}
`)
})
