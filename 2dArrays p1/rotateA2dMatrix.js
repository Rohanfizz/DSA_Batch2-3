let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let x = 0, y = a.length-1;

while(x<y){
    for(let j = 0;j<a[0].length;j++){
        let temp = a[x][j];
        a[x][j]= a[y][j];
        a[y][j]  = temp;
    }
    x++,y--;
}

for(let i = 0;i<a.length;i++){
    for(let j  = i;j<a[0].length;j++){
        let temp = a[i][j];
        a[i][j] = a[j][i];
        a[j][i]= temp;
    }
}

console.log(a);