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