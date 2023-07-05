function sumFibonacci(n) {
    return new Promise((resolve, reject) => {
        if (n < 1) {
            reject("N must be a positive integer");
        } else if (n === 1) {
            resolve(1);
        } else {
            let fib = [1, 1];
            for (let i = 2; i < n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            let sum = fib.reduce((total, num) => total + num);
            resolve(sum);
        }
    });
}
let ans = sumFibonacci(6);
console.log(ans);