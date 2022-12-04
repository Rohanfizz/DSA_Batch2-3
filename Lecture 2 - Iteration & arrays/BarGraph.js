let n = 6;
let arr = [4, 3, 2, 7, 5, 6];

let maxi = -Infinity;

for (const x of arr) {
    if (x > maxi) maxi = x;
}

for (let i = maxi; i > 0; i--) {
    for (let j = 0; j < n; j++) {
        if (arr[j] >= i) process.stdout.write("*");
        else process.stdout.write(" ");
    }
    process.stdout.write("\n");
}
