const app = require('../src/app');

describe('Test', () => {

    it('Should make a successful API call', async () => {

        const expectedObj = { ask: 5.5, bid: 5.4, currency: 'BRL' }

        jest.spyOn(global, 'fetch').mockResolvedValueOnce({ json: () => Promise.resolve(expectedObj) });

        const value = await app.getValue();

        expect(value).toBeTruthy();
        expect(value).toEqual(expectedObj);

    })

})