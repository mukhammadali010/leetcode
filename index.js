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

var kidsWithCandies = function(candies, extraCandies) {

    let max = Math.max(...candies)
    let result = []

    for(let i = 0; i < candies.length; i++){
            result.push(candies[i] + extraCandies >= max)
    }
    return result
};
console.log(kidsWithCandies([2,3,5,1,3] , 3));



