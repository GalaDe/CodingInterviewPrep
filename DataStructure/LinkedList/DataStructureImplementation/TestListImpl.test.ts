import { CDoublyLinkedList } from './CircularDoublyLinkedListImpl';
import { CircularLinkedList } from './CircularSinglyLinkedListImpl';
import { DoublyLinkedList } from './DoblyLinkedListImpl';
import { ListNode, getSize, addNodeFront, addNodeLast, addNodeAtPosition, reverse, remove } from './SinglyLinkedListImpl';

    describe('Tests', () => {
        afterAll((done) => {
        done();
        });

    it('Test: get size of the list', async () => {
        var l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        var l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        let res = getSize(l1);
        console.log(res);
    });


    it('Test: Add node at the begging of the list', async () => {
        var l1 = new ListNode('aaa');
        l1.next = new ListNode('bbb');
        l1.next.next = new ListNode('ccc');

        let res = addNodeFront('abc',l1);
        while(res != null){
            console.log(res.val); 
            res = res.next;
        }
    });
    it('Test: Add node at the end of the list', async () => {
        var l1 = new ListNode('aaa');
        l1.next = new ListNode('bbb');
        l1.next.next = new ListNode('ccc');

        let res = addNodeLast('abc',l1);
        while(res != null){
            console.log(res.val); 
            res = res.next;
        }
    });

    it('Test: Add node at the proper of the list', async () => {
        var l1 = new ListNode('aaa');
        l1.next = new ListNode('bbb');
        l1.next.next = new ListNode('ccc');

        let res = addNodeAtPosition('abc',l1, 1);
        while(res != null){
            console.log(res.val); 
            res = res.next;
        }
    });

    it('Test: Remove list', async () => {
        var l1 = new ListNode('aaa');
        l1.next = new ListNode('bbb');
        l1.next.next = new ListNode('ccc');

        let res = remove(l1, 'ccc');
        while(res != null){
            console.log(res.val); 
            res = res.next;
        }
    });


    it('Test: Revesre list', async () => {
        var l1 = new ListNode('aaa');
        l1.next = new ListNode('bbb');
        l1.next.next = new ListNode('ccc');

        let res = reverse(l1);
        while(res != null){
            console.log(res.val); 
            res = res.next;
        }
    });


    it('Test: DoublyLinkedList Implementation', async () => {
        let list = new DoublyLinkedList();
        list.add(1);
        list.add(3);
        list.add(5);
        list.add(7);
        list.addNodeAtPosition(25, 3);
        list.addNodeAtPosition(25, 1);
        list.removeNodeAtPosition(2);
        list.reverse();
    });

    it('Test: CircularLinkedList Implementation', async () => {
        let list = new CircularLinkedList();
        list.insertAtStart(1);
        list.insertAtStart(3);
        list.insertAtStart(5);
        list.insertAtStart(8);
        list.insertAtEnd(100);
        list.insertAtEnd(200);
        list.delete(200);
    });


    it('Test: CircularDoublyLinkedList Implementation', async () => {
        let list = new CDoublyLinkedList();
        list.insertAtFront(1);
        list.insertAtFront(3);
        list.insertAtFront(5);
        list.insertAtFront(8);
        list.insertAtEnd(100);
        list.insertAtEnd(200);
        list.insertAtPosition(2, 2);
        list.removeAtPosition(100);

    });
});