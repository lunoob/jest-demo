test('通过值来判断对象相等', () => {
    const getObj = () => ({ name: 'luoob' })
    // expect(getObj()).toBe(getObj())
    expect(getObj()).toEqual(getObj())
})
