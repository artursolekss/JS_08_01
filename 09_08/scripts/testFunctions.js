function makeCounter() {
    let currentCount = 1;
    alert(currentCount);
    return function() {
        return currentCount++;
    };
}
// creating a new counter  
let counter = makeCounter();
alert(counter()); // 1  
alert(counter()); // 2  
alert(counter()); // 3
// another independent counter  
let counter2 = makeCounter();
alert(counter2()); // 1