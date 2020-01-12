async function promiseReduce(functionsPromises = [], reduce, initialValue = 0) {
  return functionsPromises.reduce(
    (func, fun) => func.then(
      async summ => {
        try {
          return reduce(summ, await fun());
        } catch (e) {
          console.warn(`${e}`);
          return summ;
        }
      }
    ),
    Promise.resolve(initialValue)
  );
}

const fn1 = () => {
  console.log('fn1');
  return Promise.resolve(2);
};

const fn2 = () => new Promise(resolve => {
  console.log('fn2');
  throw new Error('error')
});

const fn3 = () => new Promise(resolve => {
  console.log('fn3');
  setTimeout(() => resolve(5), 1500);
});

promiseReduce(
  [fn1, fn2, fn3],
  function(memo, value) {
    console.log('reduce');
    return memo * value;
  },
  1,
).then(console.log);