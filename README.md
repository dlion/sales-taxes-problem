# Sales-Taxes-Problem [![Build Status](https://travis-ci.org/dlion/sales-taxes-problem.svg?branch=master)](https://travis-ci.org/dlion/sales-taxes-problem)

## Task

```
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.
```

## Setup

To use it you have to clone it on your pc 
`git clone https://github.com/dlion/sales-taxes-problem`, after that change your directory with 
`cd sales-taxes-problem`,
then type `npm install` to download mocha and it-each modules.

## Run
To run the script you have to type `node index.js`, here the result:

```
INPUT1
1 book: 12.49
1 music CD: 16.49
1 chocolate bar: 0.85
Sales Taxes: 1.5
Total: 29.83


INPUT2
1 imported box of chocolates: 10.50
1 imported bottle of perfume: 54.65
Sales Taxes: 7.65
Total: 65.15


INPUT3
1 imported bottle of perfume: 32.19
1 bottle of perfume: 20.89
1 packet of headache pills: 9.75
1 imported box of chocolates: 11.80
Sales Taxes: 6.65
Total: 74.63
```
## Tests
To test the code you have to type `npm test`, here the results:
```
  Init
    Empty Array
      ✓ Should return an empty array

  Input1
    Add articles to the cart
      ✓ Add the chocolate bar and should work without any kind of Error - 3/3
    Cart full of stuff
      ✓ Should return an array full of objects
      ✓ Should return 12.49 as price for the book
      ✓ Should return 16.49 as price for the CD
      ✓ Should return 0.85 as taxed price for the chocolate bar
    Total Sales Taxes
      ✓ Should return Total Sales Taxes number
      ✓ Should return 1.50
    Total cost of items
      ✓ Should return Total cost number
      ✓ Should return 29.83
    Empty the cart
      ✓ Should empty the cart

  Input2
    Add articles to the cart
      ✓ Add the bottle of perfume and should work without any kind of Error - 2/2
    Cart full of stuff
      ✓ Should return an array full of objects
    Total Sales Taxes
      ✓ Should return Total Sales Taxes number
      ✓ Should return 7.65
    Total cost of items
      ✓ Should return Total cost number
      ✓ Should return 65.15
    Empty the cart
      ✓ Should empty the cart

  Input3
    Add articles to the cart
      ✓ Add the box of chocolates and should work without any kind of Error - 4/4
    Cart full of stuff
      ✓ Should return an array full of objects
    Total Sales Taxes
      ✓ Should return Total Sales Taxes number
    Total cost of items
      ✓ Should return Total cost number
    Empty the cart
      ✓ Should empty the cart


  23 passing (22ms)
```

## CI
I also used Travis CI to do continuous integration: https://travis-ci.org/dlion/sales-taxes-problem 

## Spechs

Language: Nodejs

Version: Tested on node v4.6.1, v4.1, v4.0

Test Framework: Mocha

Lib: You can find taxes module in the `lib` directory as file called `taxes.js`, you can call it like a nodejs module

Test: You can find tests file on `test` directory as file called `test.js`

Inputs: You can find the tests input on the `test` directory as file called `inputs.json`

## Author
Domenico Luciani

https://domenicoluciani.com

https://dlion.it

## LICENSE
MIT
