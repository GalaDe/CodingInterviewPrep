import { hasCycle, ListNode } from "./Leetcode141_LinkedListCycle";




describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test max profit with valid data', async () => {
        let node = new ListNode(3);
        node.next = new ListNode(2);
        node.next.next = new ListNode(0);
        node.next.next.next = new ListNode(-4);
        node.next.next.next.next = node.next;

        console.log(hasCycle(node));
    })
});