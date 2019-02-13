// 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое 
// промис должен выполниться, и значение, с которым промис будет выполнен. 

// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok!


// let CreatePromise = function(text, time) {
//      this.time = time;
//      this.text = text;
//      let promiseCreator = new Promise((resolve, reject) => {
//          setTimeout(() => resolve(this.text), this.time);
//          setTimeout(() => reject('error'), 500);
//      });
//      return (promiseCreator.then(result => console.log(result)));
// };
// const createPromise = CreatePromise('some text', 100);
// createPromise.then((value) => console.log('must be done', value));

function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}
 const prom = promiseCreator(100, 'some new text');
 prom.then(console.log);

// 2. Создать класс, который производит экземпляр со следующими свойствами:
// - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.

// class Prom {...}
// const inst = new Prom();
// inst.promise.then(data => console.log(data));
// inst.resolve('test'); 
// →  test

class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
const inst = new Prom();
inst.promise.then((data) => console.log(data));
inst.resolve('test');
