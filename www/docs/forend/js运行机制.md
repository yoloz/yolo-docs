## JS 单线程

JavaScript 的单线程与它的用途有关，作为浏览器脚本语言，js 的主要用途是与用户互动以及操作 DOM。如果选用多线程会带来很复杂的同步问题，如：假定 js 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器处理起来就很复杂，所以为了避免复杂性，JavaScript 采用单线程。

:::info
为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以，这个新标准并没有改变 JavaScript 单线程的本质。
:::

JS 引擎中负责解释和执行 JavaScript 代码的线程只有一个,叫 JS 引擎线程，实际上还存在其他的线程。例如：处理 AJAX 请求的线程、处理 DOM 事件的线程、定时器线程、读写文件的线程(例如在 Node.js 中)等等。这些线程可能存在于 JS 引擎之内，也可能存在于 JS 引擎之外，参见[浏览器进程](./浏览器进程.md)

## 同步异步代码

```js
console.log("1");
console.log("2");
```

这段代码的实现就叫做同步,也就是说按照顺序去做,输出 1,2

```js
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
```

这段代码的实现就叫做异步,也就是说不完全按照顺序去做,输出 1,3,2
:::

## 宏任务与微任务

任务执行过程：宏任务->微任务->GUI 渲染->宏任务->微任务->GUI 渲染->...

### 宏任务（macrotask）

我们可以把每次执行栈中执行的代码当作是一个宏任务（包括从事件队列中取出一个事件回调放到执行栈中执行），每一个宏任务都会从头至尾执行，不会执行其他。宏任务中的代码都是同步的。

由于 JS 引擎线程和 GUI 渲染线程互斥，所以浏览器为了宏任务和 DOM 任务有序的进行，会在每一个宏任务执行完毕后，都会在下一个宏任务执行前，GUI 渲染线程开始工作，对页面进行渲染。

常见的宏任务有以下几种：

- 主代码块
- setInterval
- setTimeout
- setImmediate（）-Node
- requestAnimationFrame() -浏览器

### 微任务（microtask）

当一个宏任务执行完，会在渲染前，将执行期间所产生的所有微任务都执行完,以下形式的代码为微任务:

- process.nextTick()-Node
- Promise.then()
- catch
- finally
- Object.observe
- MutationObserver

## 事件循环(Event Loop)

1. 在 js 代码执行过程中，从上至下逐行解析，遇到同步代码可直接执行;
2. 若遇到定时器任务或异步请求，则将事件添加至事件触发器的事件队列末尾（算作下一次事件循环）;
3. 当同步任务全部执行完毕，则不断问询事件队列中是否有回调事件;
4. 若有则将事件回调放入执行栈中执行，然后再接着回到步骤 1;

一个事件循环(EventLoop)中会有一个正在执行的任务(Task)，而这个任务就是从 `macrotask` 队列中来的。当这个`macrotask` 执行结束后所有可用的 `microtask` 将会在同一个事件循环中执行，当这些 `microtask` 执行结束后还能继续添加 `microtask` 一直到整个 `microtask` 队列执行结束。**通俗点来理解的话,就是`microtask`会在当前循环中执行完成,而`macrotask`会在下一个循环中执行**

```js
console.log("1");
setTimeout(function () {
  console.log("2");
  new Promise(function (resolve, reject) {
    console.log("promise-start2");
    resolve();
  }).then(function () {
    console.log("promise-end2");
  });
}, 0);
new Promise(function (resolve, reject) {
  console.log("promise-start");
  resolve();
}).then(function () {
  console.log("promise-end");
});
setTimeout(function () {
  console.log("3");
}, 0);
console.log("4");
```

运行结果：

```log
1
promise-start
4
promise-end
2
promise-start2
promise-end2
3
```

- 主代码执行：输出 1、setTimeout 放入`macroTask`队列、输出 promise-start、产生`microTask`(then())、setTimeout 放入`macroTask`队列、输出 4；
- 执行完后执行`microTask`(promise.then())输出：promise-end;
- `macroTask`队列中取出`task`执行：输出 2、输出 promise-start2、产生`microTask`(then());
- 执行完后执行`microTask`(promise.then())输出：promise-end2；
- `macroTask`队列中取出`task`执行：输出 3；

## Promise/async/await

`new Promise(...)`是一个构造函数，这是一个同步任务，后面的`.then()`是一个异步微任务:

```js
new Promise(（resolve）=> {
    console.log(1);
    resolve();
}).then(()=> {
    console.log(2)
})
cosole.log(3)
// 1 3 2
```

`async/await` 本质上还是基于 `Promise` 的一些封装，所以在使用 `await` 关键字的效果与 `Promise.then()` 效果类似，`await` 以前的代码，相当于 `new Promise(...)` 的同步代码，`await` 以后的代码，相当于 `Promise.then()` 的异步

```js
setTimeout(() => console.log(4)); // 放入marcoTask队列

async function test() {
  console.log(1);
  await Promise.resolve(); // 产生microTask任务
  console.log(2);
}
test();

console.log(3);
// 1 3 2 4
```

## 定时器

定时器功能主要由`setTimeout()`和`setInterval()`这两个函数来完成，它们的内部运行机制完全一样，区别在于前者指定的代码是一次性执行，后者则为反复执行。

:::info

- HTML5 标准规定，`setTimeout`的最短时间间隔是`4ms`，当设置时间小于`4ms`时都会自动调整成`4ms`;在此之前，老版本的浏览器都将最短间隔设为 `10` 毫秒。
- 对于那些 `DOM` 的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行,而是每 `16` 毫秒执行一次。这时使用 `requestAnimationFrame()`的效果要好于 `setTimeout()`。

:::

:::caution 注意
由于 js 的执行机制是事件循环机制，`setTimeout` 和 `setInterval` 实际延迟运行的时间会大于等于我们设置的时间，如：

`setTimeout()`只是将事件插入了任务队列，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在 `setTimeout()`指定的时间执行。
:::

### setTimeout

`setTimeout(fn,[interval])`:用来指定某个函数或字符串在指定的毫秒数之后执行。该函数 return 一个值，表示定时器编号。interval 的缺省值为 0。

```js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve("hello"), 2000);
  });
}
getData().then((res) => {
  console.log(res);
});
// 立马输出 hello

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "hello");
  });
}
getData().then((res) => {
  console.log(res);
});
// 2s后输出hello
```

差异就是 `func()` 和 `func` 的区别，`setTimeout` 的第一个参数是 `func`，如果用 `func()` 相当于其返回值为第一个参数。如果你传的是 `func()` ，代码解析器执行到此处的时候，就会立即执行这个函数，起不到延时的效果。

### setInterval

`setInterval(fn,[interval])`:用来指定某个函数或字符串在指定的间隔内不停的执行

JavaScript 引擎规定：当使用 setInterval()时，仅当队列中没有该定时器的任何其他代码实例时，才将回调函数添加到队列中。这确保了定时器代码加入到队列中的最小时间间隔为指定间隔。而这将导致两个问题：

- 某些间隔被吞。如上面的定时器，当定时器加入队列到执行结束的时间大于 1000ms 时，下一个间隔就会被吞掉;
- 两个定时器执行的间隔小于规定的间隔。如某个定时器在 950ms 执行结束，而下一个定时器进来，事件队列刚好为空，主线程的同步任务又都执行结束，则下一个会立马执行，两个间隔只有 50ms;

### 清除定时器

使用`clearTimeout`和`clearInterval`来清除定时器，该函数的参数为定时器返回的编号

```js
let timer = setInterval(function () {
  console.log("1");
}, 1000);
clearTimeout(timer);
```
