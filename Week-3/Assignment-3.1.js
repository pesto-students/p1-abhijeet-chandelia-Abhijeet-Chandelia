function memoize(fn){
    const cache = new Map();
    return function(...args){
      const key = args.toString();
      console.log(cache);
      if(cache.has(key)){
        return cache.get(key);
      }
      cache.set(key, fn(...args));
      return cache.get(key);
    };
  }
  
  function mul(a,b){
    return a*b;
  }
  
  const memoizeMul = memoize(mul);
  
  console.time();
  memoizeMul(100,100);
  console.timeEnd();
  
  //memoizeMul(100,200);
  
  console.time();
  memoizeMul(100,100);//returns value without computing
  console.timeEnd();
  
  console.time();
  memoizeMul(100,100);//returns value without computing
  console.timeEnd();

  console.time();
  memoizeMul(100,100);//returns value without computing
  console.timeEnd();

  console.time();
  memoizeMul(100,100);//returns value without computing
  console.timeEnd();