let n = 5;
let arr = [1, 2, 3, 4, 5];
let k = 3;

function reverseFromstoe(i, j, arr) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

let s1 = 0;
let e2 = n - 1;
let s2 = n - k;
let e1 = n - k - 1;

arr = reverseFromstoe(s1, e1, arr);
arr = reverseFromstoe(s2, e2, arr);
arr = reverseFromstoe(0, n - 1, arr);

console.log(arr);
