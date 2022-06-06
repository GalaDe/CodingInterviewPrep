import { maxProfit } from "./Leetcode121_BestTimeToBuySellStock";
import { containsDuplicate } from "./Leetcode127_ContainsDuplicate";

describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test max profit with valid data', async () => {
        console.log(maxProfit([7,1,5,3,6,4]));
    })

    it('Test contains duplicates with valid data', async () => {
      console.log(containsDuplicate([0,4,5,0,3,6]));
  })
});
