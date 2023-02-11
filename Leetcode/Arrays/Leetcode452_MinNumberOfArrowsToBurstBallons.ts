/*
    Leetcode 452: Medium: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description/

    There are some spherical balloons taped onto a flat wall that represents the XY-plane. 
    The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter 
    stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.

    Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. 
    A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. 
    There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, 
    bursting any balloons in its path.

    Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

    

    Example 1:

    Input: points = [[10,16],[2,8],[1,6],[7,12]]
    Output: 2
    Explanation: The balloons can be burst by 2 arrows:
    - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
    - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].


    Example 2:

    Input: points = [[1,2],[3,4],[5,6],[7,8]]
    Output: 4
    Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.


    Example 3:

    Input: points = [[1,2],[2,3],[3,4],[4,5]]
    Output: 2
    Explanation: The balloons can be burst by 2 arrows:
    - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
    - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].


    Explanation:

    This problem is based on Greedy algorithm and we can solve this problem using this concept:

    We can understand by using an example:

    Given an 2d array of size 4 with [10,16] , [2,8] , [1,6] , [7,12]

    Suppose we shoot an arrow to [10,16] it also shoots [7,12] and if we shoot [2,8] the arrow also hits [1,6]. In simpler words, we can say if the first element of the current sub array is lesser than the targeted second element of any sub-array, the arrow hits both of them. If not, the arrow has to be shot again.

    But the above theory will only work if the array is sorted for that we will get all the first elements of the array in increasing order hence, makes comparison easier without any loopholes.

    After sorting the array looks like : [ [1,6] , [2,8] , [7,12] , [10,16] ]

    Now we can check if the first element of the current sub array is greater than the targeted second element of any sub-array (we can also check for lesser than but then you have to subtract the result from the array length).

    Here, we initialize arrow with 1 as the arrow has to be shot to start the process.
    And, the current comparison element with which the first element of the current sub array will be compared will be set as points[0][1] as it is the targeted second element of first sub-array.

    As 7>6, the arrow shot for [1,6] did not shoot [7,12], for which we had to shoot again.

    For every ith element greater, we increment the arrow counter and update the comparing element to the second element of the current sub-array. This checks if there are any more elements left to be checked for given comparison element. As the array is sorted, if the comparison condition is true that means no other sub-array can be shot with the same arrow. So we update the comparison element for next shot.

    If the condition does not fits then we check the minimum between the comparing element and the second element of current sub-array. As we have to check for minimums first to get correct result (that is why, we had sorted the array). We cannot jump as the current indicator is incrementing with every fulfilled or unfulfilled comparison.

    At last, return the arrow counter.


    Algorithm:

    1. Sort the array according to the end position of balloons using the comparator/lambda expression Arrays.sort(points, (a, b)-> Integer.compare(a[1], b[1])).
    2. Make a variable arrow and initialize it with 1( as a minimum one arrow is going to be needed to burst the balloons )
    3. Make a variable end and initialize it with points[0][1] that will be storing the end of the first balloon.
    4. Iterate over the range [1, N) using the variable i and perform the following steps:
        4.1 Check whether the start of the next balloon points[i][0] is less than the end variable end.
        4.2 If so, then continue the iteration.
        4.3 Else, increase the count of the arrow by 1 and set the value of end as points[i][1].
    5. After completing the above steps, print the value of arrow as the resultant count of arrows required.

    Time Complexity: O(N*log(N))
    Space Complexity: O(1)

*/

export function findMinArrowShots(points: number[][]): number {

    points.sort((a,b) => a[1]-b[1]);
    
    let end = points[0][1];
    let arrow = 1;
   
    // Iterate through the entire arrow of points
    for (let i = 1; i < points.length; i++) {
      // If the start of ith balloon <= end than do nothing
      if (points[i][0] <= end) {
        continue;
      }
      // if start of the next balloon >= end of the first balloon then increment the arrow
      else {
        // Update the new end
        end = points[i][1];
        arrow++;
      }
    }
   
    return arrow;
}