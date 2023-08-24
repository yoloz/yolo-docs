## Promise

```js
new Promise( function(resolve, reject) {...} /* executor */  )
```

- 构建 Promise 对象时，需要传入一个 executor 函数，主要业务流程都在 executor 函数中执行;
- Promise 构造函数执行时立即调用 executor 函数， resolve 和 reject 两个函数作为参数传递给 executor，resolve 和 reject 函数被调用时，分别将 promise 的状态改为 fulfilled（完成）或 rejected（失败）。一旦状态改变，就不会再变，任何时候都可以得到这个结果。
- 在 executor 函数中调用 resolve 函数后，会触发 promise.then 设置的回调函数；而调用 reject 函数后，会触发 promise.catch 设置的回调函数。

**Promise 是用来管理异步编程的，它本身不是异步的**，new Promise 的时候会立即把 executor 函数执行，只不过我们一般会在 executor 函数中处理一个异步操作。比如:

```js
let p1 = new Promise(() => {
  setTimeout(() => {
    console.log(1);
  }, 1000);
  console.log(2);
});
console.log(3);
// 2 3 1
```

原理参见[js 运行机制](./js运行机制.md)

### 常用方法

- Promise.resolve()：返回一个以给定值解析后的 Promise 对象；
- Promise.reject()：返回一个带有拒绝原因的 Promise 对象;
- Promise.all():参数传递 promise 数组中所有的 Promise 对象都变为 resolve 的时候，该方法才会返回， 新创建的 Promise 则会使用这些 promise 的值。如果参数中的任何一个 promise 为 reject 的话，则整个 Promise.all 调用会立即终止，并返回一个 reject 的新的 Promise 对象

```js
let p1 = Promise.resolve(1);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});
let p3 = Promise.resolve(3);
Promise.all([p3, p2, p1])
  .then((result) => {
    console.log(result);
  })
  .catch((reason) => {
    console.log("失败:reason");
  });
// 返回的结果是按照Array中编写实例的顺序来:[ 3, 2, 1 ]
```

- Promise.allSettled()：跟 Promise.all 类似, 其参数接受一个 Promise 的数组, 返回一个新的 Promise, 唯一的不同在于, 它不会进行短路, 也就是说当 Promise 全部处理完成后,我们可以拿到每个 Promise 的状态, 而不管是否处理成功。

## async&await

ES7 中新增的异步编程方法，`async/await`的实现是基于 `Promise`的，是 generator 的语法糖。

- `async`函数返回一个`Promise`对象；
- `async`函数内部 return 语句返回的值，会成为`then`方法回调函数的参数;

```js
async function f() {
  return "hello world";
}

f().then((v) => console.log(v));
// "hello world"
```

- `async` 函数内部抛出错误，会导致返回的 `Promise` 对象变为 `reject` 状态。抛出的错误对象会被 `catch` 方法回调函数接收到

```js
async function f() {
  throw new Error("出错了");
}

f().then(
  (v) => console.log("resolve", v),
  (e) => console.log("reject", e)
);
//reject Error: 出错了
```

### await

- 正常情况下，`await`命令后面是一个 `Promise` 对象，返回该对象的结果。如果不是 `Promise` 对象，就直接返回对应的值。

```js
async function f() {
  // 等同于 return 123;
  return await 123;
}

f().then((v) => console.log(v));
// 123
```

- `await` 命令后面的 `Promise` 对象如果变为 `reject` 状态，则 `reject` 的参数会被 `catch`方法的回调函数接收到。

```js
async function f() {
  await Promise.reject("出错了");
}

f()
  .then((v) => console.log(v))
  .catch((e) => console.log(e));
// 出错了
```

> `await` 语句前面没有 `return`，但是 `reject` 方法的参数依然传入了 `catch` 方法的回调函数。这里如果在 `await` 前面加上 `return`，效果是一样的。

- 任何一个`await`语句后面的 `Promise` 对象变为`reject`状态，那么整个`async`函数都会中断执行(同步)

```js
async function f() {
  await Promise.reject("出错了");
  await Promise.resolve("hello world"); // 不会执行
}
```

如果希望后面操作不要中断，可以将第一个`await`放在`try...catch`结构里面，这样不管这个异步操作是否成功，第二个`await`都会执行：

```js
async function f() {
  try {
    await Promise.reject("出错了");
  } catch (e) {}
  return await Promise.resolve("hello world");
}

f().then((v) => console.log(v));
// hello world
```

或者`await`后面的 `Promise` 对象再跟一个 `catch` 方法，处理前面可能出现的错误

```js
async function f() {
  await Promise.reject("出错了").catch((e) => console.log(e));
  return await Promise.resolve("hello world");
}

f().then((v) => console.log(v));
// 出错了
// hello world
```

`async`函数返回的 `Promise` 对象，必须等到内部所有`await`命令后面的 `Promise` 对象执行完，才会发生状态改变，除非遇到`return`语句或者抛出错误。也就是说，只有`async`函数内部的异步操作执行完，才会执行`then`方法指定的回调函数。

```js
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle("https://tc39.github.io/ecma262/").then(console.log);
// "ECMAScript 2017 Language Specification"
```

函数`getTitle`内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行`then`方法里面的`console.log`
