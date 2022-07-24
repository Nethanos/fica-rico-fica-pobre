const { getValue } = require('../src/index.js')


describe('Test', () => {

    it('Should make a successful API call', async () => {
        const value = await getValue();
        console.log(value);

    })

})