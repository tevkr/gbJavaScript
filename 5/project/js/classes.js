'use strict'
class Product
{
    static #CURR_ID = 1;
    #id;
    #name;
    #price;
    #description;
    constructor(name, price, description)
    {
        this.#id = Product.#CURR_ID;
        Product.#CURR_ID++;
        this.#name = name;
        this.#price = price;
        this.#description = description;
    }
    getId() { return this.#id; }
    getName() { return this.#name; }
    getPrice() { return this.#price; }
    getDescription() { return this.#description; }
    setName(name) { this.#name = name; }
    setPrice(price) { this.#price = price; }
    setDescription(description) { this.#description = description; }
    toString() { return 'Product { name: ' + this.#name + '; price: ' + this.#price + '; description: ' + this.#description + ' }' }
}
class Purchase
{
    static #CURR_ID = 1;
    #id;
    #product;
    #count;
    constructor(product, count)
    {
        this.#id = Purchase.#CURR_ID;
        Purchase.#CURR_ID++;
        this.#product = product;
        this.#count = count;
    }
    getId() { return this.#id; }
    getProduct() { return this.#product; }
    getCount() { return this.#count; }
    setProduct(product) { this.#product = product; }
    setCount(count) { this.#count = count; }
    toString() { return 'Purchase { id: ' + this.#id + '; product: ' + this.#product.toString() + '; count: ' + this.#count + ' }' }
}
class Basket
{
    #purchases;
    constructor(purchases)
    {
        this.#purchases = purchases;
    }
    getCountOfPurchases() {
        return this.#purchases.length;
    }
    getCountOfProducts() {
        return this.#purchases.reduce(function(prev, current) 
        { 
            return prev + current.getCount(); 
        }, 0);
    }
    getPurchases() { return this.#purchases; }
    setPurchases(purchases) { this.#purchases = purchases; }
    addPurchase(purchase) 
    {
        var oldPurchase = this.#purchases.find(p => p.getProduct().getId() === purchase.getProduct().getId());
        if (oldPurchase != null)
        {
            oldPurchase.setCount(oldPurchase.getCount() + 1);
        }
        else
        {
            this.#purchases.push(purchase); 
        }
    }
    removePurchase(id)
    {
        this.#purchases = this.#purchases.filter(function(purchase) 
        { 
            return purchase.getId() != id; 
        });
    }
    removeAllPurchases() { this.#purchases = []; }
    calculatePrice()
    {
        return this.#purchases.reduce(function(prev, current) 
        { 
            return prev + (current.getProduct().getPrice() * current.getCount()); 
        }, 0);
    }
    toString()
    {
        var result = 'Basket { [ ';
        for (var i = 0; i < this.#purchases.length - 1; i++)
        {
            result += this.#purchases[i].toString() + ', ';
        }
        result += this.#purchases[this.#purchases.length - 1].toString() + ' ] }';
        return result;
    }
}


// ------------------------USAGE------------------------
// var products = [
//     new Product('name1', 1, 'descr1'), 
//     new Product('name2', 2, 'descr2'), 
//     new Product('name3', 3, 'descr3'), 
//     new Product('name4', 4, 'descr4')];
// var purchases = [
//     new Purchase(products[0], 10), 
//     new Purchase(products[1], 15), 
//     new Purchase(products[2], 4)];
// var basket = new Basket(purchases);

// console.log(basket.calculatePrice());// 1*10+2*15+3*4=52

// basket.addPurchase(new Purchase(products[3], 10));// 1*10+2*15+3*4+4*10=92
// console.log(basket.calculatePrice());

// basket.removePurchase(1);
// console.log(basket.calculatePrice());// 2*15+3*4+4*10=82

// basket.removeAllPurchases();
// console.log(basket.calculatePrice());// 0