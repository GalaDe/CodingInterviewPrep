import { rotate } from "./Leetcode48_RotateImage";



describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test max profit with valid data', async () => {
        console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
    })
});