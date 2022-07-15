"use strict";
/*
    Heap sort is one of the sorting algorithms used to arrange a list of elements in order. Heapsort algorithm uses one of the tree concepts called Heap Tree.
    In this sorting algorithm, we use Max Heap to arrange list of elements in Ascending order and Min Heap to arrange list elements in Descending  order.

    Step by Step Process

    The Heap sort algorithm to arrange a list of elements in ascending order is performed using following steps...

    Step 1 - Construct a Binary Tree with given list of Elements.
    Step 2 - Transform the Binary Tree into Max Heap.
    Step 3 - Delete the root element from Max Heap using Heapify method.
    Step 4 - Put the deleted element into the Sorted list.
    Step 5 - Repeat the same until Max Heap becomes empty.
    Step 6 - Display the sorted list.

    ----------------------------------------------------------------------------------------------------------
    Heap Sort Complexity Time Complexity:

    Best	            O(nlog n)
    Worst	            O(nlog n)
    Average	            O(nlog n)
    Space Complexity	O(1)

    Heap Sort has O(nlog n) time complexities for all the cases ( best case, average case, and worst case).
    ----------------------------------------------------------------------------------------------------------

    Let us understand the reason why. The height of a complete binary tree containing n elements is log n
    As we have seen earlier, to fully heapify an element whose subtrees are already max-heaps, we need to keep comparing the element
    with its left and right children and pushing it downwards until it reaches a point where both its children are smaller than it.

    In the worst case scenario, we will need to move an element from the root to the leaf node making a multiple of log(n) comparisons and swaps.
    During the build_max_heap stage, we do that for n/2 elements so the worst case complexity of the build_heap step is n/2*log n ~ nlog n.
    During the sorting step, we exchange the root element with the last element and heapify the root element. For each element, this again takes log n worst time
    because we might have to bring the element all the way from the root to the leaf. Since we repeat this n times, the heap_sort step is also nlog n.

    Also since the build_max_heap and heap_sort steps are executed one after another, the algorithmic complexity is not multiplied and it remains in the order of nlog n.
    Also it performs sorting in O(1) space complexity. Compared with Quick Sort, it has a better worst case ( O(nlog n) ). Quick Sort has complexity O(n^2) for worst case.
    But in other cases, Quick Sort is fast. Introsort is an alternative to heapsort that combines quicksort and heapsort to retain advantages of both:
    worst case speed of heapsort and average speed of quicksort.

    -----------------------------------------------------
    Heap Sort Applications:
    -----------------------------------------------------

    Systems concerned with security and embedded systems such as Linux Kernel use Heap Sort because of the O(n log n) upper bound on Heapsort's running time and constant O(1)
    upper bound on its auxiliary storage.
    Although Heap Sort has O(n log n) time complexity even for the worst case, it doesn't have more applications ( compared to other sorting algorithms like Quick Sort, Merge Sort ).
    However, its underlying data structure, heap, can be efficiently used if we want to extract the smallest (or largest) from the list of items without the overhead of
    keeping the remaining items in the sorted order. For e.g Priority Queues.

    -----------------------------------------------------
    The heap data structure has many applications:
    -----------------------------------------------------

    1. Heapsort: One of the best sorting methods being in-place and with no quadratic worst-case scenarios.
    
    2. Selection algorithms: Finding the min, max, both the min and max, median, or even the k-th largest element can be done in linear time (often constant time) using heaps.
    
    3. Graph algorithms: By using heaps as internal traversal data structures, run time will be reduced by polynomial order.
                         Examples of such problems are Prim's minimal spanning tree algorithm and Dijkstra's shortest path problem.

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeapSort = void 0;
class HeapSort {
    sort(arr) {
        const size = arr.length;
        // Build max heap
        for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
            this.heapify(arr, size, i);
        }
        // Heap sort: One by one extract an element from heap
        for (let i = size - 1; i >= 0; i--) {
            this.swap(arr, 0, i); // Move current root to end
            this.heapify(arr, i, 0); // call max heapify on the reduced heap
        }
    }
    heapify(arr, size, i) {
        let largest = i;
        let leftChildIndex = 2 * i + 1;
        let rightChildIndex = 2 * i + 2;
        // If the left child is larger than the current largest.
        if (leftChildIndex < size && arr[leftChildIndex] > arr[largest]) {
            largest = leftChildIndex;
        }
        // If the right child is larger than the current largest.
        if (rightChildIndex < size && arr[rightChildIndex] > arr[largest]) {
            largest = rightChildIndex;
        }
        // If the largest of the two is not the original largest
        if (largest != i) {
            this.swap(arr, i, largest); // Swap i and the largest.
            this.heapify(arr, size, largest); // Recursively heapify the affected sub-tree
        }
    }
    swap(arr, a, b) {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
}
exports.HeapSort = HeapSort;
//# sourceMappingURL=HeapSortImpl.js.map