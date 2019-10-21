const Product = require('../../../classes/Product').Product;
const CarInsurance = require('../../../classes/products/CarInsurance').CarInsurance;

test('New CarInsurance is created', () => {
    const products = [
        new Product('Medium Coverage', 10, 20),
        new Product('Full Coverage', 2, 0),
    ];

    const carInsurance = new CarInsurance(products);
    expect(carInsurance.products.length).toBe(2);
});