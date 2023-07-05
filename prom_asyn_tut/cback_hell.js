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

let order = (call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[0]} has been selected`);
        call_production();
    }, 2000);

}
let production = () => {
    setTimeout(() => {
        console.log("Production has been started");

        setTimeout(() => {
            console.log(`${stocks.Fruits[0]} has been chopped`);

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} are added`);

                setTimeout(() => {
                    console.log("Machine has been started");

                    setTimeout(() => {
                        console.log(`Ice cream is placed in ${stocks.Holder[0]} `);

                        setTimeout(() => {
                            console.log(`${stocks.Toppings[0]} is added`);

                            setTimeout(() => {
                                console.log("Ice cream is served");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
};

order(production);