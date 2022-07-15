import { hasCycle, ListNode } from "./Leetcode141_LinkedListCycle";
import { deleteDuplicates } from "./Leetcode82_RemoveDuplicates2";


describe('Tests', () => {
    afterAll((done) => {
      done();
    });

    it('Test hasCycle with valid data', async () => {
        let node = new ListNode(3);
        node.next = new ListNode(2);
        node.next.next = new ListNode(0);
        node.next.next.next = new ListNode(-4);
        node.next.next.next.next = node.next;

        console.log(hasCycle(node));
    })


    it('Test deleteDuplicates with valid data', async () => {
      let node = new ListNode(1);
      node.next = new ListNode(2);
      node.next.next = new ListNode(3);
      node.next.next.next = new ListNode(3);
      node.next.next.next.next = new ListNode(4);
      node.next.next.next.next.next = new ListNode(4);
      node.next.next.next.next.next.next = new ListNode(5);

      console.log(deleteDuplicates(node));
  })
});