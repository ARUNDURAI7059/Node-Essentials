let order = (call_production) => {
    console.log("Order Placed!");
    call_production();
}

let production = () => {
    console.log("Order received, Production Started");
}

order(production);