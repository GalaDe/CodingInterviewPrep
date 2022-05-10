import { Stack1, Stack2 } from "./StackImpl";



    describe('Tests', () => {
        afterAll((done) => {
        done();
        });

    it('Test: Stack Implementation using Linked List', async () => {
        let stack = new Stack2();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        let top = stack.top();
        console.log(top);
        stack.pop();
        stack.pop()
    });

    it('Test: Stack Implementation using Array', async () => {
        let stack = new Stack1();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(5);
        let top = stack.top();
        console.log(top);
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
    });

});