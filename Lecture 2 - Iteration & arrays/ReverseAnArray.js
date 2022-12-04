let n = 5;
let arr = [1,2,3,4,5];

let i = 0;
let j = n-1;

while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++; j--;
}
console.log(arr);

