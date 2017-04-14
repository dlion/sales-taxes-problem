var taxes = require('./lib/taxes.js');

function doIt(taxes) {
    
    var obj = taxes.getProducts();
    
    for(var i=0; i < obj.length; i++) {
        console.log(obj[i].quantity+((obj[i].imported) ? " imported" : "")+" "+obj[i].name+": "+obj[i].priceTaxed);
    }
    
    console.log("Sales Taxes: "+taxes.calcTotalSalesTaxes());
    console.log("Total: "+taxes.calcTotalPrices());
    
    taxes.emptyProducts();
}

//INPUT 1
console.log("\nINPUT 1:")
taxes.addProduct("book", 1, true, false, 12.49);
taxes.addProduct("music CD", 1, false, false, 14.99);
taxes.addProduct("chocolate bar", 1, true, false, 0.85);
doIt(taxes);


//INPUT 2
console.log("\nINPUT 2:")
taxes.addProduct("box of chocolates", 1, true, true, 10.00);
taxes.addProduct("bottle of perfume", 1, false, true, 47.50);
doIt(taxes);

//INPUT 3
console.log("\nINPUT 3:")
taxes.addProduct("bottle of perfume", 1, false, true, 27.99);
taxes.addProduct("bottle of perfume", 1, false, false, 18.99);
taxes.addProduct("packet of headache pills", 1, true, false, 9.75);
taxes.addProduct("box of chocolates", 1, true, true, 11.25);
doIt(taxes);