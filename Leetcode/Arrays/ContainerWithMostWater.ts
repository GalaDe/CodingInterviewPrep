/*
    You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
    Find two lines that together with the x-axis form a container, such that the container contains the most water.

    Return the maximum amount of water a container can store.

    Example 1:
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
    In this case, the max area of water (blue section) the container can contain is 49.

    Solution: The best approach to resolve the problem is to create 2 pointers: left and right, calculate the area, 
               then compare with maxArea and move right or left depending on the hight;       

*/

//            * *
//height = [1,8,6,2,5,4,8,3,7] TC = O(n)
export function maxArea(height: number[]): number {

    let maxArea = 0
    let indexRight = height.length - 1;
    let indexLeft  = 0;

    while(indexLeft < indexRight){
        let smallestSide = Math.min(height[indexLeft], height[indexRight]); //1,7,3,8,4,5,2,6
        let area = (indexRight - indexLeft) * smallestSide; //(8-0)*1=8,(8-1)*7=49,(7-1)*3=18,(6-1)*8=40,(5-1)*4=16,(4-1)*5=15,(3-1)*2=4,(2-1)*6=6
        if(area > maxArea) maxArea = area; //8,49
        if (height[indexLeft] < height[indexRight]) 
            indexLeft++;
		else indexRight--;
    }
    return maxArea;
};