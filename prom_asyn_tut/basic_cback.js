function order(call_production) {

    console.log("Order placed!");
    call_production();
}

function production() {
    console.log("Order recieved, Production Started");
}
order(production);