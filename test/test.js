const assert = require('assert');
const taxes = require("../lib/taxes.js")


describe('Init', function() {
  describe('Empty Array', function() {
    it('Should return an empty array', function() {
        const Tarray = taxes.getProducts();
        const Earray = [];
        assert.deepEqual(Tarray, Earray);
    });
  });
});

//Input 1
describe('Input1', function() {
    describe('Add articles to the cart', function() {
        const input1 = require('./inputs.json')["input1"];
        require('it-each')(); //Because async
        
        it.each(input1,'Add the %s and should work without any kind of Error', ["name"], function(values, next) {
            assert.doesNotThrow(() => taxes.addProduct(values.name, values.quantity, values.excepted, values.imported, values.price));
            next();
        });
    });
    
    describe('Cart full of stuff', function() {
        it('Should return an array full of objects', function() {
            const cart = taxes.getProducts();
            assert.ok(cart.length > 0);
        });
        
        it('Should return 12.49 as price for the book', function() {
             const cart = taxes.getProducts();
             assert.deepEqual(cart[0].priceTaxed, 12.49);
        });
        
        it('Should return 16.49 as price for the CD', function() {
            const cart = taxes.getProducts();
            assert.deepEqual(cart[1].priceTaxed, 16.49);
        });
        
        it('Should return 0.85 as taxed price for the chocolate bar', function() {
            const cart = taxes.getProducts();
            assert.deepEqual(cart[2].priceTaxed, 0.85);
        });
    });
    
    describe('Total Sales Taxes', function() {
        it('Should return Total Sales Taxes number', function() {
            assert.deepEqual('number', typeof taxes.calcTotalSalesTaxes());
        });
        
        it('Should return 1.50', function() {
            assert.deepEqual(taxes.calcTotalSalesTaxes(), 1.50);
        });
    });
    
    describe('Total cost of items', function() {
        it('Should return Total cost number', function() {
            assert.deepEqual('number', typeof taxes.calcTotalPrices());
        });
        
        it('Should return 29.83', function() {
            assert.deepEqual(taxes.calcTotalPrices(), 29.83);
        });
    });
    
    describe('Empty the cart', function() {
        it('Should empty the cart', function() {
            const Earray = [];
            taxes.emptyProducts();
            const Tarray = taxes.getProducts();
            assert.deepEqual(Tarray, Earray)
        });
    });
})

//Input 2
describe('Input2', function() {
   describe('Add articles to the cart', function() {
        const input2 = require('./inputs.json')["input2"];
        require('it-each')(); //Because async
        
        it.each(input2,'Add the %s and should work without any kind of Error', ["name"], function(values, next) {
            assert.doesNotThrow(() => taxes.addProduct(values.name, values.quantity, values.excepted, values.imported, values.price));
            next();
        });
    });
    
    describe('Cart full of stuff', function() {
        it('Should return an array full of objects', function() {
            const cart = taxes.getProducts();
            assert.ok(cart.length > 0);
        });
    });
    
    describe('Total Sales Taxes', function() {
        it('Should return Total Sales Taxes number', function() {
            assert.deepEqual('number', typeof taxes.calcTotalSalesTaxes());
        });
        
        it('Should return 7.65', function() {
            assert.deepEqual(taxes.calcTotalSalesTaxes(), 7.65);
        });
    });
    
    describe('Total cost of items', function() {
        it('Should return Total cost number', function() {
            assert.deepEqual('number', typeof taxes.calcTotalPrices());
        });
        
        it('Should return 65.15', function() {
            assert.deepEqual(taxes.calcTotalPrices(), 65.15);
        });
    });
    
    describe('Empty the cart', function() {
        it('Should empty the cart', function() {
            const Earray = [];
            taxes.emptyProducts();
            const Tarray = taxes.getProducts();
            assert.deepEqual(Tarray, Earray)
        });
    });
})

//Input 3
describe('Input3', function() {
   describe('Add articles to the cart', function() {
        const input3 = require('./inputs.json')["input3"];
        require('it-each')(); //Because async
        
        it.each(input3,'Add the %s and should work without any kind of Error', ["name"], function(values, next) {
            assert.doesNotThrow(() => taxes.addProduct(values.name, values.quantity, values.excepted, values.imported, values.price));
            next();
        });
    });
    
    describe('Cart full of stuff', function() {
        it('Should return an array full of objects', function() {
            const cart = taxes.getProducts();
            assert.ok(cart.length > 0);
        });
    });
    
    describe('Total Sales Taxes', function() {
        it('Should return Total Sales Taxes number', function() {
            assert.deepEqual('number', typeof taxes.calcTotalSalesTaxes());
        });
    });
    
    describe('Total cost of items', function() {
        it('Should return Total cost number', function() {
            assert.deepEqual('number', typeof taxes.calcTotalPrices());
        });
    });
    
    describe('Empty the cart', function() {
        it('Should empty the cart', function() {
            const Earray = [];
            taxes.emptyProducts();
            const Tarray = taxes.getProducts();
            assert.deepEqual(Tarray, Earray)
        });
    });
})