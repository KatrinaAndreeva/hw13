// 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое 
// промис должен выполниться, и значение, с которым промис будет выполнен. 

// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);
// // Ok!

let promiseCreator = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Ok!'), 500);
    setTimeout(() => reject('error'), 500);
});
promiseCreator.then(result => console.log(result));


// 2. Создать класс, который производит экземпляр со следующими свойствами:
// - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.

// class Prom {...}
// const inst = new Prom();
// inst.promise.then(data => console.log(data));
// inst.resolve('test'); 
// →  test

