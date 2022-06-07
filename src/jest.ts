/**
* @Author: luoob
* @Last Modified by: luoob
* @Introduction: 手动实现简单版的 jest
*/

export function test (desc: string, callback: () => void) {
    try {
        callback()
        console.log(`${desc}: success`)
    } catch (error: any) {
        console.log(error.message)
    }
}

export function expect (value: any) {
    return {
        toBe (val: any) {
            if (val !== value) {
                throw new Error(`expect ${val}, but result is ${value}`)
            }
        }
    }
}
