import { hasCycle, ListNode } from "./Leetcode141_LinkedListCycle";
import { mergeTwoLists } from "./Leetcode21_MergeTwoSortedLists";
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

    it('Test deleteDuplicates with valid data', async () => {
      let node1 = new ListNode(1);
      node1.next = new ListNode(2);
      node1.next.next = new ListNode(4);

      let node2 = new ListNode(1);
      node2.next = new ListNode(3);
      node2.next.next = new ListNode(4);

      console.log(mergeTwoLists(node1, node2));
  })



});