let a = [5, 0, 5, 8];
let n = a.length;
let b = [9, 5, 9, 7, 8];
let m = b.length;

function reverse(a) {
    let i = 0;
    let j = a.length - 1;
    while (i < j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
        i++;
        j--;
    }
    return a;
}

let ans = [];
a = reverse(a);
b = reverse(b);

let i = 0;
let j = 0;
let carry = 0;

while (i < n || j < m || carry > 0) {
    let x = 0;
    let y = 0;
    if (i < n) x = a[i];
    if (j < m) y = b[j];

    let sum = x + y + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;
    ans.push(sum);
    i++;
    j++;
}

ans = reverse(ans);
console.log(ans);