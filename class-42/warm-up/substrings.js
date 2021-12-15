'use strict';

const hasSubstring = (string1, string2) => {
  let substring = '';
  let shorterString, longerString;
  if (string1.length < string2.length) {
    shorterString = string1;
    longerString = string2;
  } else {
    shorterString = string2;
    longerString = string1;
  }
  for (let i = 0; i < shorterString.length; i++) {
    nextsubstring = substring + shorterString[i];
    if (!longerString.includes(shorterString[i])) {
      substring = shorterString[i];
    } else if(longerString.includes(substring)) {
      // find index in longerstring and add to substring.
      substring += 
    }
    
  }
  return substring;
};




// I like the abstractions
// Unfortunately, we can't use the JS abstractions in these challenges :'(
// like includes is a no-go? But indexOf is OK? 
// Common abstractions are a great starting point

// ideally all of these are no-gos, but as a first pass they are okay for getting some solution down.



// breaking the function out
function getShortestString(string1, string2){
  let shorterString;
  if (string1.length < string2.length) {
    shorterString = string1;
  } else {
    shorterString = string2;
  }
  return shorterString;
}

function getShortestStringInAShorterWay(s1, s2){
  return s1.length < s2.length ? s1 : s2;
}

