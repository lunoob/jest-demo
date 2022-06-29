/**
 * @jest-environment jsdom
 */

test('测试 dom 元素', () => {
    const spanEl = document.createElement('span')
    spanEl.textContent = 'hello world'
    spanEl.setAttribute('id', 'hello')
    document.body.appendChild(spanEl)

    expect(document.getElementById('hello')?.textContent).toMatch('hello world')
})
