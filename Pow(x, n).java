// Pow(x, n)

// Companies
// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

2^10  = 2^5 * 2^5;
2^5 = 2^2 * 2^2 * 2;
class Solution {
    public double myPow(double x, int n) {
        double res = helper(x,Math.abs(n));
        if(n>=1) return res;
        return 1/res; // if n < -1 then return 1/res for -ve powers
        
    }

    public double helper(double x, int n){
        if(n==0) return 1;
        if(x==0) return 0;
        
        double res=helper(x,n/2);
         res = res*res;
// Math logic
// 2^10  = 2^5 * 2^5;
// 2^5 = 2^2 * 2^2 * 2;
        if(n%2==0) return res; //if n is even return res
        return res * x; //if n is odd multiply with x one time
    }
}