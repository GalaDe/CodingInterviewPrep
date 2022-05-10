

/*
    Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

    Return the maximum amount of water a container can store.

    Example 1:
    Input: date = "2019-01-09"
    Output: 9
    Explanation: Given date is the 9th day of the year in 2019.

    Solution: The best approach to resolve the problem is to create 2 pointers: left and right, calculate the area, 
               then compare with maxArea and move right or left depending on the hight;       

*/

//Example: '2019-02-10'
export function dayOfYear(date: string): number {

    if((date < '1900-01-01') || (date > '2019-12-31'))
        return null;

    let convertedDate = new Date(date); //Feb 9, 2019
    let convertedDateToFullYear = new Date(convertedDate.getFullYear(), 0, 0); //Dec 31, 2018
    let diff = convertedDate.valueOf() - convertedDateToFullYear.valueOf();
    //1000 milliseconds * 60 seconds * 60 minutes * 24 hours
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    return day;
};