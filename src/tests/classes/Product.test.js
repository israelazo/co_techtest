const Product = require('../../classes/Product').Product;

test('New Product is created', () => {
    const product = new Product('Medium Coverage', 10, 20);
    expect(product.name).toBe('Medium Coverage');
    expect(product.sellIn).toBe(10);
    expect(product.price).toBe(20);
});