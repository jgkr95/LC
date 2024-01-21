// 20. Valid Parentheses
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	let n = s.length;
	let st = [];
	const pairs = {
		"}": "{",
		"]": "[",
		")": "(",
	};
	for (let i = 0; i < n; i++) {
		let par = s.charAt(i);
		if (["(", "[", "{"].includes(par)) {
			st.push(par);
		} else if (["}", ")", "]"].includes(par)) {
			let top = st.pop();
			if (top != pairs[par]) return false;
		} else return false;
	}
	return st.length === 0;
};

// Java solution
// class Solution {
//     public boolean isValid(String s) {
//         Stack<Character> st=new Stack<Character>();
//         for(int i=0;i<s.length();i++){

//         if(s.charAt(i)=='(' || s.charAt(i)=='{' || s.charAt(i)=='['){
//                 st.push(s.charAt(i));
//             }
//        else if(st.empty()){
//                 return false;
//             }
//     // Check for the close brackets pair on the top and pop them
//             else if (st.peek() == '{' && s.charAt(i) == '}' ) {
//                 st.pop();
//             } else if (st.peek() == '(' && s.charAt(i) == ')' ) {
//                 st.pop();
//             } else if (st.peek() == '[' && s.charAt(i) == ']' ) {
//                 st.pop();
//             }else{
//                 return false;
//             }
// }
//         return st.isEmpty();
//     }
// }
