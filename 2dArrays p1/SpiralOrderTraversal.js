let arr = [
    [26, 34, 47, 30, 19, 66],
    [73, 2, 25, 29, 9, 31],
    [7, 5, 61, 78, 82, 56],
    [92, 36, 100, 35, 41, 49],
    [12, 25, 36, 43, 91, 93],
];

var spiralOrder = function(arr) {
    let ans = [];
    let n = arr.length;
    let m = arr[0].length;
    let total = n*m;

    let tw = 0;
    let bw = n-1;
    let lw = 0;
    let rw = m-1;

    while(total>0){
        for(let j = lw; j<=rw && total>0 ;j++){
            ans.push(arr[tw][j]);
            total--;
        }
        tw++;

        for(let i = tw;i<=bw && total>0;i++){
            ans.push(arr[i][rw]);
            total--;
        }
        rw--;

        for(let j = rw;j>=lw && total>0;j--){
            ans.push(arr[bw][j]);
            total--;
        }
        bw--;

        for(let i = bw;i>=tw && total>0;i--){
            ans.push(arr[i][lw]);
            total--;
        }
        lw++;
    }
    return ans;
};



