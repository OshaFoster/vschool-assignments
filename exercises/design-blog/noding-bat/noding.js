// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
// Given 3 int values, return true if 1 or more of them are teen.

var hasTeen=function(a, b, c){ 
  
  return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19) 

}

// Given a string, take the last char and return a new string with
// the last char added at the front and back, so 'cat' yields 'tcatt'/
// The original string will be length 1 or more.

var backAround = function(str){ 

  var lastCharecter = str[str.length-1]
  
   return lastCharecter + str + lastCharecter
}

// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.

nearHundred = function(n){ 
 
 return (n >=90 && n <=110) || (n >=190 && n <=211)
 
}