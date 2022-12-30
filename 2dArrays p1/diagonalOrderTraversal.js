let a = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];
let n = a.length;
let ans = [];

for (let g = n - 1; g > 0; g--) {
    for (let i = g, j = 0; i < n; i++, j++) {
        ans.push(a[i][j]);
    }
}

for (let g = 0; g < n; g++) {
    for (let i = 0, j = g; j < n; i++, j++) {
        ans.push(a[i][j]);
    }
}

console.log(ans);
