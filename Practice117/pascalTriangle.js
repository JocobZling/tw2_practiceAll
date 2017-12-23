function pascal_triangle(n) {
    let result = '1';
    if (n === 1) return result + '\n';//第一行
    for (let i = 1; i <= n - 1; i++) {
        result = result + ' ' + factorial(n - 1) / (factorial(i) * factorial(n - 1 - i));
    }
    return pascal_triangle(n - 1) + result + '\n';
}

function factorial(n) {
    if (n === 1 || n === 0) return 1;
    return factorial(n - 1) * n;
}
console.log(pascal_triangle(3));