import { isPalindrome } from "./ifIntegerIsPalindrome";


describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test isPalindrome with valid data', async () => {
        console.log(isPalindrome(121));
    })
});