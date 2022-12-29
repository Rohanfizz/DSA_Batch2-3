// let arr = [
//     [0, 0, 0, 0, 0, 1, 0, 1],
//     [0, 1, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0, 1, 0],
//     [1, 1, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 1, 0],
// ];
let arr= [[1]];
let i= 0;
let j= 0;
let state = 0;
let di = [0,1,0,-1];
let dj = [1,0,-1,0];

while(i>=0 && i<=arr.length-1 && j>=0 && j<=arr[0].length-1){
    if(arr[i][j]==1){
        state = (state+1)%4;
        arr[i][j] = 0;
    }
    i+=di[state];
    j+=dj[state];
}

i-=di[state];
j-=dj[state];
console.log(i,j);