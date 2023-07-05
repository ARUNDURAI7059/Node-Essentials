// 1) place the order - 2
// 2) cut the fruit - 2
// 3) Add Water and Ice - 1
// 4) Start the machine - 1
// 5) Select Container - 2
// 6) Select Toppings - 3
// 7) Serve Ice Creams - 2

let stocks = {
    Fruits: ["Bannana", "Strawberry", "Grapes", "Apple"],
    Liquid: ["Water", "Ice"],
    Holder: ["Cone", "Cup", "Stick "],
    Toppings: ["Chocolate", "Peanuts"]
};


let isShopOpen = false;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (isShopOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(() => console.log("Our shop is closed"));
        }
    });
};

order(2000, () => {
        console.log(`${stocks.Fruits[0]} is selected`);
    })
    .then(() => {
        return order(0000, () => console.log("Production has been started"));
    })
    .then(() => {
        return order(2000, () => console.log(`${stocks.Fruits[0]} is chopped`));
    })
    .catch(() => {
        console.log("Reach us after a while");
    }).finally(() => {
        console.log("Thanks for Reaching us");
    })