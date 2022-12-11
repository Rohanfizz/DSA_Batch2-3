let arr = [10, 13, 35, 45, 99, 100];
let sum = 48 + 45 + 123;

let i = 0;
let j = 0;
let csum = arr[0];

let found = false;

while (i < arr.length) {
    if (csum == sum) {
        console.log(j, i);
        found = true;
        break;
    } else if (csum > sum) {
        csum -= arr[j];
        j++;
    } else if (csum < sum) {
        i++;
        if (i == arr.length) break;
        csum += arr[i];
    }
}
if (found == false) console.log("Not found");
