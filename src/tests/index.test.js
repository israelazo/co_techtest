const index = require('../../src/index');

test('Run ComparaOnline test', () => {

    expect(index.runCoTest()).toBe(true);
});