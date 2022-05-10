import { MaxHeap} from './MaxHeapImpl';
import { MinHeap } from './MinHeapImpl';
import { HeapSort } from './HeapSortImpl';

    describe('Tests', () => {
        afterAll((done) => {
        done();
        });

    it('Test: Insert Impl & Delete of Max Heap', async () => {
        let maxHeap = new MaxHeap();
        maxHeap.insert(10);
        maxHeap.insert(20);
        maxHeap.insert(15);
        maxHeap.insert(30);
        maxHeap.insert(40);      
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
        maxHeap.delete();
    });

    it('Test: Insert Impl & Delete of Min Heap', async () => {
        let minHeap = new MinHeap();
        minHeap.insert(10);
        minHeap.insert(20);
        minHeap.insert(15);
        minHeap.insert(30);
        minHeap.insert(40);      
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
        minHeap.delete();
    });

    it('Test: Heap Sort using Max Heap', async () => {
        let arr = [1, 12, 9, 5, 6, 10 ];
        let heapSort = new HeapSort();
        heapSort.sort(arr); //[1, 5, 6, 9, 10, 12]

    });

});
