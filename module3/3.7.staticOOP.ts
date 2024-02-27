//Dynamic instance
class Counter {
  count: number = 0;
  increment() {
    return (this.count = this.count + 1);
  }
  decrement() {
    return (this.count = this.count - 1);
  }
}

const instance1 = new Counter();

//dynamic instance create different memory for every instance
console.log(instance1.increment()); //1
console.log(instance1.increment()); //2
console.log(instance1.increment()); //3

const instance2 = new Counter();
console.log(instance2.increment()); //1
console.log(instance2.increment()); //2
//Dynamic instance

// Static instance

// Static use krle class er nam dhore call krte hbe property k . and eta ekta memory k target korei value increment or decrement krbe. different memory create krbe na alada alada instance er jnno
class Counter2 {
  static count: number = 0;
  increment() {
    Counter2.count = Counter2.count + 1;
  }
  decrement() {
    Counter2.count = Counter2.count - 1;
  }
}

const instance3 = new Counter2();
console.log(instance3.increment()); //1
console.log(instance3.increment()); //2

const instance4 = new Counter2(); // 3

// Static instance
