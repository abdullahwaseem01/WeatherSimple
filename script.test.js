const search = require('./script')
const weather = require ('./script')

test('will ensure search function works', () => {
    expect(weather).search(expect.anything());
});