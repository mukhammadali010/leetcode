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

var isValid = function(arr) {
    arr = arr.split("")
    if(arr.length === 1){
        return false
    }
    for (let i=0; i<arr.length - 1; i+=2){ 
            if(arr[i]==="{" && arr[i+1]==="}"){
                arr.splice(i,1);
                arr.splice(i,1);
                i-=2;
            }
            if(arr[i]==="(" && arr[i + 1]===")"){
                arr.splice(i,1);
                arr.splice(i,1);
                i-=2;
            }
            if(arr[i]==="[" && arr[i+1]==="]"){
                arr.splice(i,1);
                arr.splice(i,1);
                i-=2;
            }
 };

 console.log(arr)
 return arr.length === 0 
}
console.log( isValid('{[]}'));
