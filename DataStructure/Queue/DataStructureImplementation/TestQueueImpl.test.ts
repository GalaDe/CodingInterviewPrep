import { QueueArr } from "./QueueArrayImpl";
import { QueueLL } from "./QueueLinkedListImpl";
import { QueueStack } from "./QueueStackImpl";


    describe('Tests', () => {
        afterAll((done) => {
        done();
        });

    it('Test: Queue Implementation using Array', async () => {
        let queue = new QueueArr();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        let val = queue.peek();
        console.log(val);
        queue.dequeue();
        queue.dequeue();
    });

    it('Test: Queue Implementation using Linked List', async () => {
        let queue = new QueueLL();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        queue.peek();
        queue.dequeue();
        queue.dequeue();
    });

    it('Test: Queue Implementation using two stacks', async () => {
        let queue = new QueueStack();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
        let val = queue.peek();
        console.log(val);
        queue.dequeue();
        queue.dequeue();
    });

});