import { fetchData } from '../src/promise'

// test('the data is peanut butter', async () => {
//     const data = await fetchData()
//     expect(data).toMatch('baidu')
// })

// test('the fetch fails with an error', async () => {
//     // 断言，就一定要触发一次 expect 函数执行
//     expect.assertions(1)
//     try {
//         await fetchData()
//     } catch (e: any) {
//         expect(e.message).toMatch('ECONNREFUSED')
//     }
// })

// test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toMatch('baidu.com')
// })

test('the data is peanut butter', async () => {
    await expect(fetchData()).rejects.toMatch('nonono1')
})
