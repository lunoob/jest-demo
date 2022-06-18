# Jest Demo

## 匹配器

### toBe

内部通过调用 Object.is 进行判断是否相等

### toEqual

递归检查对象或数组的每个字段

### not 取反



### 更多

更多匹配器参考[文档](https://www.jestjs.cn/docs/expect)



## 测试异步代码

请参考[文档](https://www.jestjs.cn/docs/asynchronous)



## Jest 钩子函数

### beforeAll

[文档](https://www.jestjs.cn/docs/api#beforeallfn-timeout)

### beforeEach

[文档](https://www.jestjs.cn/docs/api#beforeeachfn-timeout)

### afterAll

[文档](https://www.jestjs.cn/docs/api#afterallfn-timeout)

### afterEach

[文档](https://www.jestjs.cn/docs/api#aftereachfn-timeout)

### 执行顺序

从外到内的执行顺序

```typescript
beforeAll(() => {
  console.log(1)
})

describle('global', () => {
  beforeAll(() => {
    console.log(2)
  })
  
  test('1 + 1', () => {
    expect(1 + 1).tobe(2)
  })
  
  describle('inner', () => {
    beforeAll(() => {
      console.log(3)
    })

    test('2 + 2', () => {
      expect(2 + 2).tobe(4)
    })
  })
})

// 正确的执行顺序：1、2、3
```



## Mock

