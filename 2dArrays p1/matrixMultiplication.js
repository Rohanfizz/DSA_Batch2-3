let r1 = 3;
let c1 = 3;
let r2 = 3;
let c2 = 2;

if (c1 != r2) {
    console.log("Multiplication Not Possible");
}

let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let b = [
    [1, 4],
    [2, 5],
    [3, 6],
];

// let ans = new Array(r1).fill(0).map(() => new Array(c2).fill(0));
let ans = [];
for(let i = 0;i<r1;i++){
    let row =[];
    for(let j = 0;j<c2;j++) row.push(0);
    ans.push(row);
}

for(let i = 0;i<r1;i++){
    for(let j= 0;j<c2;j++){
        for(let k = 0;k<c1;k++){
            ans[i][j] += (a[i][k] * b[k][j]);
        }
    }
}

console.log(ans);
