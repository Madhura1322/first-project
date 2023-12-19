const nums = [10,2,3,4,5];

let sum = 0;

for(let i=0;i<nums.length;i=i+2){
    sum = sum + nums[i]  //1
}

console.log("sum==", sum);

let j=0;
let len = nums.length
let  sum1 = 0
while(j<len){
    sum1+=nums[j]
    j++
}


console.log("sum through while loop = ", sum1);



