'use strict';

module.exports = (function() {
    var products = []; //Array of products
    
    /**
     * A wrapper function which allows to calculate the total sum of any fields 
     * of the products object
     * 
     * @param field string Which field you want to sum throught the object
     */
    var totalSum = (field) => {
        var sum = 0;
        
        for(var i in products) {
            sum = parseFloat(sum) + parseFloat(products[i][field]);
        }
            
        return parseFloat(sum).toFixed(2);
    }
    
    /**
     * Allows to calculate prices taxed for a product
     */
    var calcPriceTaxed = (price, tax) => {
        var tValue = parseFloat((price) * tax / 100);
        var nearest = parseFloat((Math.round( tValue / 0.05)) * 0.05);
        var result = parseFloat(price) + parseFloat(nearest);
        return result.toFixed(2);
    }
    
    /**
     * Allows to calculate sales taxes for a product
     */
    var calcSalesTaxes = (price, priceTaxed) => parseFloat(parseFloat(priceTaxed) - parseFloat(price)).toFixed(2)
    
    return {
        /**
         * Allows to add a product to the list
         * @param name string The name of the product
         * @param quantity integer The quantity of the product
         * @param excepted boolean If the product is an exception
         * @param imported boolean If the product is imported
         * @param price decimal The price of the product
         */
        addProduct: (name, quantity, excepted, imported, price) => {
            var tax = 0;
            
            if(!excepted) {
                tax = tax + 10;
            }
    
            if(imported) {
                tax = tax + 5;
            }
            
            var priceTaxed = ((excepted && !imported) ? parseFloat(price) : calcPriceTaxed(price, tax));
            var salesTaxes = ((excepted && !imported) ? 0 : calcSalesTaxes(price, priceTaxed))
            
            var product = { //Create an object of product
                name: name,
                quantity: quantity,
                excepted: excepted,
                imported: imported,
                price: price,
                tax: tax,
                priceTaxed: priceTaxed,
                salesTaxes: salesTaxes
            };
            
            products.push(product); //product object added to array
            
        },
        
        /**
         * Allows to know the total sum of salesTaxes for one checkout
         */
        calcTotalSalesTaxes: () => totalSum("salesTaxes"),
        
        /**
         * Allows to know the total sum of priceTaxed for one checkout
         */
        calcTotalPrices: () => totalSum("priceTaxed"),
        
        /**
         * Return the products
         */
        getProducts: () => products,
        
        /**
         * Empty the products array
         */
        emptyProducts: () => { products = [] }
    }
}());