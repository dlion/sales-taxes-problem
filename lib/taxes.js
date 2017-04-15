'use strict';

module.exports = (function() {
    let products = []; //Array of products
    
    /**
     * A wrapper function which allows to calculate the total sum of any fields 
     * of the products object
     * 
     * @param field string Which field you want to sum throught the object
     */
    const totalSum = function(field){
        if(typeof field !== 'string')
            throw new Error('field must be a string type');
        let sum = 0;
        
        for(var i in products) {
            sum = parseFloat(sum) + parseFloat(products[i][field]);
        }
            
        return parseFloat(sum).toFixed(2);
    }
    
    /**
     * Allows to calculate prices taxed for a product
     */
    const calcPriceTaxed = (quantity, price, tax) => {
        if( typeof quantity !== 'number'    ||
            typeof price    !== 'number'    ||
            typeof tax      !== 'number')
                throw new Error('Wrong type of parameters');
        
        const tValue = parseFloat((price) * tax / 100);
        const nearest = parseFloat((Math.round( tValue / 0.05)) * 0.05);
        const result = parseFloat(price) + parseFloat(nearest);
        return (quantity * result).toFixed(2);
    }
    
    /**
     * Allows to calculate sales taxes for a product
     */
    const calcSalesTaxes = (quantity, price, priceTaxed) => parseFloat(parseFloat(priceTaxed) - (parseFloat(price) * quantity)).toFixed(2)
    
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
            
            if( typeof name     !== 'string'    ||
                typeof quantity !== 'number'    ||
                typeof excepted !== 'boolean'   ||
                typeof imported !== 'boolean'   ||
                typeof price    !== 'number')
                    throw new Error('Wrong type of parameters');
            
            let tax = 0;
            
            if(!excepted) {
                tax = tax + 10;
            }
    
            if(imported) {
                tax = tax + 5;
            }
            
            const priceTaxed = ((excepted && !imported) ? (quantity * price) : calcPriceTaxed(quantity, price, tax));
            const salesTaxes = ((excepted && !imported) ? 0 : calcSalesTaxes(quantity, price, priceTaxed))
            
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
        calcTotalSalesTaxes: () => parseFloat(totalSum("salesTaxes")),
        
        /**
         * Allows to know the total sum of priceTaxed for one checkout
         */
        calcTotalPrices: () => parseFloat(totalSum("priceTaxed")),
        
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