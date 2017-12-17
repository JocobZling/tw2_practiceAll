function fibonacciSequence2(a, b) {
    if (a < 100) {
        console.log(a);
    }
    else {
        return;
    }
    fibonacciSequence2(b, a + b);
}
fibonacciSequence2(1, 1);
