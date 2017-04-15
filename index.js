const taxes = require('./lib/taxes.js');
const inputs = require('./test/inputs.json');

function doIt(taxes) {
    
    const obj = taxes.getProducts();
    
    for(var i in obj) {
        console.log(obj[i].quantity+((obj[i].imported) ? ' imported' : '')+' '+obj[i].name+': '+obj[i].priceTaxed);
    }
    
    console.log("Sales Taxes: "+taxes.calcTotalSalesTaxes());
    console.log("Total: "+taxes.calcTotalPrices());
    
    taxes.emptyProducts();
}

for(var i in inputs) {
    console.log(i.toUpperCase());
    inputs[i].forEach(function(product) {
        taxes.addProduct(product.name, product.quantity, product.excepted, product.imported, product.price);
    });
    doIt(taxes);
    console.log('\n');
}