//1

// var removeElement = function(nums, val) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === val){
//            nums.splice(i , 1)
//            i--
//         }

//     }
//     console.log(nums);
//     return nums.length;
// };

// console.log(removeElement([3,2,2,3] , 3));

//=========================================================

//2

// var strStr = function(haystack, needle) {
//     let res =   haystack.includes(needle)
//     if(res){
//         return haystack.indexOf(needle)
//     }
//     else{
//         return -1
//     }

// };
// console.log(strStr('sadbutsad' , 'sd'));
// ========================================================

//3

// var searchInsert = function(nums, target) {
//     let sum = [...nums]
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === target){
//             return nums.indexOf(target)
//         }
//         else if(!nums.includes(target)){
//             sum.push(target)
//             sum.sort((a,b)=> a-b)
//             return sum.indexOf(target)
//         }
//     }
// };

// console.log(searchInsert([1,3,5,6] , 7));
//=========================================================

// 4

// var lengthOfLastWord = function (s) {

//  s = s.trim().split(" ");
//  console.log(s)

//   return s.at(1)
// };

// console.log(lengthOfLastWord("luffy is still joyboy"));

//5

//=========================================================

//6

// var plusOne = function (digits) {
//     digits =  BigInt(digits.join(""))
//     digits = digits + BigInt(1)
//     return (String(digits)).split("")
// };

// console.log(plusOne([1, 2, 3]))


// =========================================================

// 7

// var addBinary = function(a, b) {
//     let c = BigInt(`0b${a}` + `0b${b}`);
//     c= c.toString(2)
//     console.log( c);
// };
// addBinary('111', 1011)


// 8 


var climbStairs = function(n) {
    let sum = 0;
    let res = 0
    for(let i = 0; i <= n; i++){
        sum = i

        if(n == sum ){
            res = sum + i - 2
        }
    }

    console.log(res);
};

console.log(climbStairs(8));