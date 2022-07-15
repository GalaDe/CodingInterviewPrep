import { addTwoNumbers } from '../LinkedList/Leetcode2_AddTwoNumbers';
import { ListNode, getSize } from '../../DataStructure/LinkedList/DataStructureImplementation/SinglyLinkedListImpl';
import { lengthOfLongestSubstring } from '../String/lengthOflongestSubstring';
import { findMedianSortedArrays } from '../Arrays/FindMedianSortedArrays';
import { searchInsert, searchInsert_2 } from '../Arrays/SearchInsertPosition';
import { divideRecursiveApproach } from '../MathOperations/DivideTwoIntegers';
import { reverse_2 } from '../MathOperations/ReverseInteger';
import { convert_1 } from '../String/ZigzagConversion';
import { myAtoi_2 } from '../String/ConvertStringToInt';
import { letterCombinations_recursive2, letterCombinations_dynamic } from '../Backtracking/LetterCombinationsPhoneNumber';
import { maxArea } from '../Arrays/Two_Pointers/Leetcode11_ContainerWithMostWater';
import { dayOfYear } from '../MathOperations/DayOfTheYear';
import { mergeKLists } from '../LinkedList/Leetcode23_MergeKSortedLists';
import { threeSum } from '../Arrays/Two_Pointers/3Sum';
import { twoSum_2} from '../Arrays/Two_Pointers/2Sum';
import { threeSumClosest_1 } from '../Arrays/Two_Pointers/3SumClosest';
import { reorganizeString } from '../String/ReorganizeString';


describe('Tests', () => {
      afterAll((done) => {
        done();
      });

    it('Test AddTwoNumbers with valid data', async () => {
        var l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        var l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        let res = addTwoNumbers(l1, l2);
        while(res != null){
            console.log(res.val); 
            res = res.next;
        }
    });

    it('Test Merge K Sorted List with valid data', async () => {

      let lists: Array<ListNode> = [];
      var l1 = new ListNode(1);
      l1.next = new ListNode(4);
      l1.next.next = new ListNode(5);

      var l2 = new ListNode(1);
      l2.next = new ListNode(3);
      l2.next.next = new ListNode(4);

      var l3 = new ListNode(2);
      l3.next = new ListNode(6);

      //lists.push(l1);
      lists.push(null);
      lists.push(l2);
      lists.push(l3);

      let res = mergeKLists(lists);
      while(res != null){
          console.log(res.val); 
          res = res.next;
      }
  });

    it('Test lengthOfLongestSubstring with valid data', async () => {

      let res = lengthOfLongestSubstring('dvdf');
      console.log(res); 
  });

    it('Test findMedianSortedArrays with valid data', async () => {
      let num1 = [1,2]
      let num2 = [3, 4]
      let res = findMedianSortedArrays(num1, num2);
      console.log(res); 
  });

  it('Test searchInsert with valid data', async () => {
    let arr = [1, 3, 5, 6];
    var target = 0;
    let res = searchInsert_2(arr, target);
    console.log(res); 
  });

  it('Test divide with valid data', async () => {
    let res = divideRecursiveApproach(10, 3);
    console.log(res); 
  });

  it('Test reverse with valid data', async () => {
    let res = reverse_2(312);
    console.log(res); 
  });


  it('Test convert string to integer with valid data', async () => {
    let res = myAtoi_2("123b1");
    console.log(res); 
  });

  it('Test Letter Combinations of a Phone Number with valid data', async () => {
    let res: string [] = [];
    res = letterCombinations_recursive2('23');
    res.forEach(i => console.log(i)); 
  })

  it('Test Container With Most Water with valid data', async () => {
    let res = maxArea([1,8,6,2,5,4,8,3,7]);
    console.log(res); 
  })

  it('Test Day of the Year with valid data', async () => {
    let res = dayOfYear('2019-02-10');
    console.log(res); 
  })

  it('Test 3Sum with valid data', async () => {
    let res = threeSum([-1,0,1,2,-1,-4]);
    console.log(res); 
  })

  it('Test 3SumClosest with valid data', async () => {
    let arr = [-1,2,1,-4];
    let res = threeSumClosest_1(arr, 1);
    console.log(res); 
  })

  it('Test 2Sum with valid data', async () => {
    let arr = [3,2,4];
    let res = twoSum_2(arr, 6);
    console.log(res); 
  })

  it('Test 2Sum with valid data', async () => {
    let arr = [3,2,4];
    let res = twoSum_2(arr, 6);
    console.log(res); 

  })  
  
  it('Test reorganizeString with valid data', async () => {
    let res = reorganizeString('vvvlo');
    console.log(res); 
  })
});