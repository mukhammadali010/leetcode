// let k = 0
// let mx = 0
// for (i= 0 ; i < s.length ; i ++){
//         k=0
//         for(y=0; y<s.length; y++){
//             q = s.slice(i,i+k)
//             p = s.slice(y,y+k)
//             a=q.split('')
//             b=p.split('')
//             a.sort()
//             b.sort()

//             if (JSON.stringify(a) === JSON.stringify(b)){
//                 a = new Set(a)
//                 mx = Math.max(a.size, mx)
//             }
//         k++
//         }

// }
//     return mx

//  var lengthOfLongestSubstring = function (s) {

//  var l = '';
// for(let i = 0; i <s.length; i++){
// for(let j=0; j < s.length; j ++){
//     if(s[i] !== s[j]){
//         l.push(s[i])
//     }
// }
//         l = s[i] + ''

//     }
//     return l

// };

// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("abcabcbb"))

// var isValid = function(arr) {
//     arr = arr.split("")
//     if(arr.length === 1){
//         return false
//     }
//     const obj={
//         "{":"}",
//         "[":"]",
//         "(":")"
//     }
//     for( let i=0;i<arr.length; i++){
//         if(arr[i]===obj[arr[i]] || arr[i+1]===obj[arr[i]] ){
//             return true
//         }
//     }
// }

// var isValid = function(arr) {
//     arr = arr.split("")
//     if(arr.length === 1){
//         return false
//     }
//     for (let i=0; i<arr.length - 1; i+=2){
//             if(arr[i]==="{" && arr[i+1]==="}"){
//                 arr.splice(i,1);
//                 arr.splice(i,1);
//                 i-=2;
//             }
//             if(arr[i]==="(" && arr[i + 1]===")"){
//                 arr.splice(i,1);
//                 arr.splice(i,1);
//                 i-=2;
//             }
//             if(arr[i]==="[" && arr[i+1]==="]"){
//                 arr.splice(i,1);
//                 arr.splice(i,1);
//                 i-=2;
//             }
//  };

//  console.log(arr)
//  return arr.length === 0
// }
// console.log( isValid('{[]}'));

// var numIdenticalPairs = function(nums) {
//     let count = 0
//     let b = [...new Set(nums)]
//     for(let i =0 ; i <= b.length; i++){
//         for(let j =i+1 ; j < nums.length; j++){
//              if(nums[i] === nums[j] ){
//                 count++
//              }
//              console.log(nums);
//         }
//     }
//     return count
// };
// console.log(numIdenticalPairs([1,1,1,1]));

//=========================================================

// 1672

// var maximumWealth = function (accounts) {
//   let array = [];
//   let max = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     const sumOfElements = accounts[i].reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     array.push(sumOfElements);
//   }
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// };
// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ])
// );

//=================================================

// 1431

// var kidsWithCandies = function(candies, extraCandies) {

//     let max = Math.max(...candies)
//     let result = []

//     for(let i = 0; i < candies.length; i++){
//             result.push(candies[i] + extraCandies >= max)
//     }
//     return result
// };
// console.log(kidsWithCandies([2,3,5,1,3] , 3));

//===================================================================

//2824

// var countPairs = function (nums, target) {
//   let count = 0;
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] < target) {
//         result.push(nums[i]);
//         result.push(nums[j]);
//         count++
//       }
//     }
//   }
//   return count;

// };
// console.log(countPairs([-1, 1, 2, 3, 1], 2));

//===========================================================

//1480

// var runningSum = function (nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0
//         for (let j = 0; j < i; j++) {
//             sum += nums[j]
//         }
//         result.push(sum)
//     }
//     return result
// };
// runningSum([1, 2, 3, 4]);

//1365

//===================================================

// var smallerNumbersThanCurrent = function (nums) {
//   let sum = []
//   for (let i = 0; i < nums.length; i++) {
//       let count = 0;
//       for (let j = 0; j < nums.length; j++) {
//         if(nums[i] > nums[j]){
//             count++
//         }
//     }
//     sum.push(count)
//   }
//   return sum
// };
// smallerNumbersThanCurrent([8, 1, 2, 2, 3]);

//====================================================

//2114

// var mostWordsFound = function(sentences) {
//     let max = sentences[0].split(" ").length
//     for(let i = 1 ; i  < sentences.length; i++){
//         if(max < sentences[i].split(" ").length){
//             max = sentences[i].split(" ").length
//         }
//     }
//     return max
// };

// mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])

//================================================================

//2574

// var leftRightDifference = function(nums) {
//     let left = [0]
//     let right = [0]
//     let result = []
//     for(let i = 0; i < nums.length-1; i++){

//         left.push(nums[i] + left.at(-1))
//     }

//     for(let i = nums.length-1; i > 0; i--){
//         right.unshift(nums[i]+right[0])
//     }
//     for(let i = 0 ; i < left.length; i++){
//         for(let j = 0; j < right.length; j++){
//             if(i == j){
//                 let sum = Math.abs(left[i] - right[j])
//                 result.push(sum)
//             }
//         }
//     }
//     return result
// };
// leftRightDifference([10,4,8,3])

// ==================================================

// var createTargetArray = function(nums, index) {
//     let target = new Array(index.length)
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0 ; j < index.length; j++){
//             if()
//             target[i] = nums[i]
//         }
//     }
//     console.log(target);
// };
// createTargetArray([0,1,2,3,4], [0,1,2,2,1])

// function decimalToBinary(decimalNumber) {
//     if (decimalNumber === 0) {
//       return "0"; // Special case when the input is 0
//     }

//     let binary = "";
//     while (decimalNumber > 0) {
//       binary = (decimalNumber % 2) + binary; // Prepend the remainder to the binary string
//       decimalNumber = Math.floor(decimalNumber / 2); // Update the quotient for the next iteration
//     }

//     return binary;
//   }

//   const decimalNumber = 100;
//   const binaryNumber = decimalToBinary(decimalNumber);
//   console.log(binaryNumber); // Output: "1101"

// ================================================================

// let index = 0;
// let array = [1,2,3,4,5];
// let targetValue = 0;
// while (array[index] !== targetValue) {
//     // Process array[index]
//     index++;
// }
// console.log(index);

// var numberOfSteps = function (num) {
//     let = count = 0;
//     while (num >= 1) {
//        if(num % 2 == 0) {
//         count++
//         break;
//        }
//        if(num % 2 == 1){
//         num = num -1;
//        }
//        count++
//     }
//     return count
// };

// console.log(numberOfSteps(14));

// var interpret = function(command) {
//     let text = command.replaceAll('()' , 'o');
//     let res = '';

//     for(let i = 0 ; i < text.length; i++){
//         if(text[i] !== '(' && text[i] !== ')')
//         res +=(text[i])
//     }
//     return res
//  };

//  console.log(interpret('G()()()()(al)'));\

// var restoreString = function(s, indices) {
//     let res =0;
//     let str = []
//     for(let j = 0; j < indices.length; j++){
//     for(let i = 0; i < s.length; i++){
//             if (i == indices[j]){
//                 str.push(s[i])

//             }
//         }
//     }
//     return str.join('')
// };

// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));

let str = { abc: 1, r: 2, d: 5 };

let arr = Object.keys(str)
arr.every((value)=>{
    if(Number(value)){
       console.log(false);
    }
    else{
        console.log(true);
    }
})