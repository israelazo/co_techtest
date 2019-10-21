const Product = require('../../../classes/Product').Product;
const CarInsurance = require('../../../classes/products/CarInsurance').CarInsurance;

const products = [
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
];

test('New CarInsurance is created', () => {
    const carInsurance = new CarInsurance(products);
    expect(carInsurance.products.length).toBe(2);
});

test('CarInsurance prices are updated correctly', () => {
    const carInsurance = new CarInsurance(products);

    carInsurance.updatePrice();

    expect(carInsurance.products[0].sellIn).toBe(9);
    expect(carInsurance.products[0].price).toBe(19);
});