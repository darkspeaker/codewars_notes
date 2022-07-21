function promiseHelloWorld() {
  // replace this nonsense with your Promise
  // return / / ? '' : (() => 'Hello World!')();
  return new Promise(resolve => resolve('Hello World!'))
}
console.log(promiseHelloWorld())
