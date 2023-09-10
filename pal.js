// var isPalindrome = function (x) {
//   var s = [];
//   let st = x.toString();
//   for (let i = 0; i < st.length; i++) {
//     s.push(st[i]);
//   }
//   console.log(s);

//   let a = [];
//   let b = [];
//   for (let i = 0; i < s.length; i++) {
//     a.push(s[i]);
//     b.push(s[i]);
//   }
//   a = parseInt(a.join(""));
//   b = parseInt(b.reverse().join(""));
//   console.log( a, b);
//   if(a === b){
//     return true
//   }
//   else{
//     return false
//   }
// };

// console.log(isPalindrome(121));

// var romanToInt = function (s) {
//   var sum = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I" && s[i + 1] === "V") {
//       sum += 4;
//       i += 1;

//     } else if (s[i] === "I" && s[i + 1] === "X") {
//       sum += 9;
//       i += 1;

//     } else if (s[i] === "X" && s[i + 1] === "L") {
//       sum += 40;
//       i += 1;

//     } else if (s[i] === "X" && s[i + 1] === "C") {
//       sum += 90;
//       i += 1;

//     } else if (s[i] === "C" && s[i + 1] === "D") {
//       sum += 400;
//       i += 1;

//     } else if (s[i] === "C" && s[i + 1] === "M") {
//       sum += 900;
//       i += 1;

//     } else if (s[i] === "I") {
//       sum++;
//     } else if (s[i] === "V") {
//       sum += 5;
//     } else if (s[i] === "X") {
//       sum += 10;
//     } else if (s[i] === "L") {
//       sum += 50;
//     } else if (s[i] === "C") {
//       sum += 100;
//     } else if (s[i] === "D") {
//       sum += 500;
//     } else if (s[i] === "M") {
//       sum += 1000;
//     }
//   }
//   return sum;
// };
// console.log(romanToInt("MCMXCIV"));

// var longestCommonPrefix = function (arr) {
//    firstElement= arr.sort((a,b) => a.length - b.length).splice(0,1)[0];
//    console.log(firstElement);
//    console.log(arr);
//    for(i = firstElement.length; i > 0; i--){
//        console.log(i);
//         let b = firstElement.slice(0,i);
//         console.log("b",b);
//             if(arr.every(item=> item.startsWith(b))){
//                 return b
//             }
//    }
//    return ""

// };

// console.log("result", longestCommonPrefix(["flower", "flow", "flight"]))

var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
        nums.splice(i + 1, 1);
        i--;
    }
}

return nums.length
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))