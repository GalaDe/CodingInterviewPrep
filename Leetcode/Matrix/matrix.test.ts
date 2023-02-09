import { countSquares } from "./Leetcode1277_CountSquareSubmatricesWithAllOnes";
import { rotate } from "./Leetcode48_RotateImage";
import { setZeroes } from "./Leetcode73_SetMatrixZeroes";



describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test max profit with valid data', async () => {
        console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
    })

    it('Test max profit with valid data', async () => {
      console.log(countSquares([
        [0,1,1,1],
        [1,1,1,1],
        [0,1,1,1]
      ])); //15
    })

    it('Test max profit with valid data', async () => {
      console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])); //15
    })
});