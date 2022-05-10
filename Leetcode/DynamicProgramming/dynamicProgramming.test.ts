import { longestCommonSubsequence_dp1 } from "./LongestCommonSubsequence";
import { shortestCommonSupersequence } from "./ShortestCommonSupersequence";

describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test longestCommonSubsequence with valid data', async () => {
        let res = longestCommonSubsequence_dp1('abcde', 'ace');
        console.log(res); 
    })

    it('Test shortestCommonSupersequence with valid data', async () => {
        let res = shortestCommonSupersequence('abac', 'cab');
        console.log(res); 
      })
});