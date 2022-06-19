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

[文档](https://www.jestjs.cn/docs/jest-object#mock-functions)

## Function

### mock

fn.mock 可以看到 mock 出来的函数的信息



### toHaveBeenCalled()

别名 `toBeCalled()` ，是否被调用了



### mockImplementation

对 Mock 出来的函数进行重新定义



### mock 模块

对模块文件进行模拟，对导出的所有属性进行 mock

[文档](https://www.jestjs.cn/docs/jest-object#jestmockmodulename-factory-options)

**Ref**

- https://blog.csdn.net/zrq1210/article/details/110238970



## Snapshot

> 快照，相当于对数据进行了一份复制。保存在本地

如果快照中存在属性值为动态的，可以使用 expect.any 为这个属性值进行断言

```typescript
// test function
export function generateAnotherConfig () {
    return {
        domain: 'localhost',
        post: 8080,
        count: 8,
        time: new Date()
    }
}

// test case
test('测试 generateAnotherConfig 函数', () => {
    expect(generateAnotherConfig()).toMatchSnapshot({
        time: expect.any(Date)
    })
})
```



### 行内快照

> toMatchInlineSnapshot

生成的快照再行内显示
