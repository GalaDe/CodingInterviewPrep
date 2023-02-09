/*
    Leetcode 2244: Medium: https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

    You are given a 0-indexed integer array tasks, where tasks[i] represents the difficulty level of a task. In each round, you can complete either 2 or 3 tasks of the same difficulty level.

    Return the minimum rounds required to complete all the tasks, or -1 if it is not possible to complete all the tasks.

    
    Example 1:

    Input: tasks = [2,2,3,3,2,4,4,4,4,4]
    Output: 4
    Explanation: To complete all the tasks, a possible plan is:
    - In the first round, you complete 3 tasks of difficulty level 2. 
    - In the second round, you complete 2 tasks of difficulty level 3. 
    - In the third round, you complete 3 tasks of difficulty level 4. 
    - In the fourth round, you complete 2 tasks of difficulty level 4.  
    It can be shown that all the tasks cannot be completed in fewer than 4 rounds, so the answer is 4.


    Example 2:

    Input: tasks = [2,3,3]
    Output: -1
    Explanation: There is only 1 task of difficulty level 2, but in each round, you can only complete either 2 or 3 tasks of the same difficulty level. Hence, you cannot complete all the tasks, and the answer is -1.

*/

export function minimumRounds(tasks: number[]): number {

    if(tasks.length <= 1) return -1;

    tasks.sort((a,b) => a-b);

    let finalCount = 0;
    let count = 1;
    let leftP = 0;
    let rightP = 1;


    while(leftP < tasks.length || rightP <= tasks.length){
        while(tasks[leftP] == tasks[rightP]){
            count++;
            rightP++;
        }
        if(count == 2 || count == 3){
            finalCount++;
            count = 1;
            leftP = rightP;
            rightP++;
        }
        else if(count > 3){
            const maximumNumberCount = Math.floor(count/3)
            const reminder = count % 3
            if(reminder === 0){
                finalCount +=  maximumNumberCount;
                count = 1;
                leftP = rightP;
                rightP++;
                continue;
            }
            if(reminder % 2 === 0){
                finalCount += (maximumNumberCount + reminder/2);
                count = 1;
                leftP = rightP;
                rightP++;
                continue;
            }
            if(reminder < 2){
                finalCount += ((maximumNumberCount -1) + (reminder + 3) / 2 );
                count = 1;
                leftP = rightP;
                rightP++;
                continue;
            }
        }
        else return -1;
    }

    return finalCount;
};