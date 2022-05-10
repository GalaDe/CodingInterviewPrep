/*

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

IMPORTANT: According to the problem description, if the string begins with a character that is not a number or a minus sign, you should return 0:
           Example: Input: "words and 987"

Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.

Rules

Whitespaces:
If any whitespaces occur at the beginning of the input string, we discard them.
However, if whitespace occurs anywhere else in the input, then we stop and discard the rest of the input.
'   1234' => 1234 (whitespaces at beginning are removed)
'      4' => 4    (whitespaces at beginning are removed)
' 12   4' => 12   (only the leading whitespaces are removed)

Digits:
Discard any leading zeros.
Read in all the digit characters until the first non-digit character or the end of the input occur and append those to the output number.
If no digits were found, return 0.
'12345 567 v' => 12345 (digits are appended until a non-digit character occurs)
'00123'       => 00123 => 123 (0s in the beginning of the numbers are discarded)

Sign:
There could be at most one sign character presented at the beginning, or after skipping some whitespaces from the beginning of the input string. Otherwise, a sign anywhere else in the input string is not valid and is considered a non-digit character and we stop building the integer.
If a '+' or no sign is present, the final number will be a positive integer. On the other hand, the final number will be negative if '-' is the first non-whitespace character in the string.
'123'  => 123 (a number with no sign is a positive number)
'+123' => 123 (a number with '+' sign is a positive number)
'-12'  => -12 (a number with '-' sign is a negative number)
'-+12' => 0   (another sign after one sign is considered as non-digit character)

Anything else:
If any other character not covered by previously defined rules is spotted, we stop building the output number.
'-23a45 567 v' => -23 (we stopped when 'a' character occured)
'123 45 567 v' => 123 (we stopped when a space character occured)
'a+123 bcd 45' => 0   (we stopped when 'a' character occured in the beginning)

32-bit Integer Range:
If the integer exceeds 2^{31}-12 
31
 −1 then it will be clamped to 2^{31}-12 
31
 −1.
And if the integer becomes less than -2^{31}−2 
31
  then it will be clamped to -2^{31}−2 
31
 .
'12345' => 12345 (integer is in 32-bit range)
'9999999999999' => 2^31-1 (integer overflow)
'-999999999999' => -2^31   (integer underflow)

*/

// My solution doesn't work for all cases. Example "+-12"
export function myAtoi(s: string): number {

    let res = '', sign = '';
    let j = 0;

    while(j < s.length){
        if(s[j] == ' ') j++;
        if(!(s[j] >= '0' && s[j] <= '9') && !(s[j] == '-' || s[j] == '+' || s[j] == ' ')) return 0;
        if(s[j] == '-' || s[j] == '+') sign += s[j];
        if(s[j] >= '0' && s[j] <= '9'){
            res = collectNum(s.substring(j, s.length));
            break;
        }
        j++;
    }

    if(sign == '-' && sign.length == 1) res = sign + res; 
    if(sign == '-' || sign == '+' && sign.length > 1) return 0; 
    if (parseInt(res) > Math.pow(2, 31)) return 2147483648;
    if(parseInt(res) < Math.pow(-2, 31)) return -2147483648;

    return parseInt(res);
};

function collectNum(s: string){
    let j = 0;
    let res = '';

    while(j < s.length && (s[j] >= '0' && s[j] <= '9')){
        res += s[j];
        j++;
    }
    return res;
}

function myAtoi_4(s: string): number {
    s = s.trim()
    
    let start: number = 0
    let result: number = 0
    let sign: number = 1
    const max: number = Math.pow(2, 31) - 1
    const min: number = -Math.pow(2, 31)
    
    if(["+","-"].includes(s[0])) {
        sign = s[0] === "+" ? 1: -1;  
        start++;
    }
        
    for (let i=start;i<s.length;i++) {
        let code: number = s.charCodeAt(i) - '0'.charCodeAt(0)
        
        if (code < 0 || code > 9)
            return sign * result;
        
        if (result > Math.floor(max / 10) || (result == Math.floor(max / 10) && code > max % 10))
            return sign == 1 ? max : min
        
        result = result * 10 + code;
    }
    
    return sign * result
};

export function myAtoi_2(s: string) {
	//Define our low and high limits
    const posLimit = Math.pow(2,31) - 1;
    const negLimit = Math.pow(-2,31);
	
    let result:any[] | number = []
    //remove whitespaces in start of string and convert to elements array
	const temp = s.trim().split("")
	
    for (let i = 0; i < temp.length; i++) {
		//if we see + or - at start , push it to result array and increment i ++
        if(temp[i] == "-" || temp[i] == "+"){
            result.push(temp[i]);
            i++;
        }
		//When we have a non digit element in our scanned array, stop our loop
        if(isNaN(parseInt(temp[i]))){
            break
        }
        result.push(temp[i])
    }
	//join our array to string
    result = parseInt(result.join(""))
    if ( result > posLimit) return posLimit
    if ( result < negLimit) return negLimit
    
	//if result 0 or NaN (it can happen if in string have + and -  together) return 0
    if(result == 0 || isNaN(result)){
        return 0
    }else return result
};

function myAtoi_3(s: string): number {
    const trimmedS = s.trim();
    if (trimmedS === "") return 0;
  
    const parsedInt = Number.parseInt(trimmedS, 10);
    if (Number.isNaN(parsedInt)) return 0;
  
    const minRange = Math.pow(-2, 31);
    if (parsedInt < minRange) return minRange;
  
    const maxRange = Math.pow(2, 31) - 1;
    if (parsedInt > maxRange) return maxRange;
  
    return parsedInt;
  };