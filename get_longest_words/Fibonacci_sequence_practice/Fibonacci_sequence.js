'use strict'
function fibonacciSequence(a, b, c) {
    if (c > 100) {
        return;
    }
    console.log(a);
    fibonacciSequence(b, a + b, c + 1);
}
fibonacciSequence(1, 1, 1);

