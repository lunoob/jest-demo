const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk'
]

test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})

const obj = {
    name: 'luoob',
    age: 18,
    arr: ['lo']
}

test('obj has luoob on it', () => {
    expect(obj.arr).toContain('loa')
})
