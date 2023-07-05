//Write a promise to find the sum of nth fibonacci numberfunction fibonacci(num) {
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

let ans = fibonacci(6);

let order = (time, val) => {
    return new Promise((resolve, reject) => {
        if (val % 2 === 0) {
            setTimeout(() => {
                resolve(() => {
                    console.log(val);
                })
            }, time);
        } else {
            reject(() => {
                console.log("Err");
            })
        }
    });
};

order(2000, ans).catch(() => {
    console.log("Error message");
});