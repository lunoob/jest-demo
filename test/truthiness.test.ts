test('希望为 null', () => {
    expect(null).toBeNull()
})

test('希望为 undefined', () => {
    expect(undefined).toBeUndefined()
})

test('希望为 defined', () => {
    // 只要值不是 undefined 就为 true
    expect(1).toBeDefined()
})

test('希望为 true', () => {
    expect(-1).toBeTruthy()
})

test('希望为 false', () => {
    expect('').toBeFalsy()
})
