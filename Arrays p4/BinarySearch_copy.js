let arr = [21, 32, 38, 40, 56, 76, 77, 87, 90, 97, 101];
let badarr = [77, 32, 38, 21, 76, 90, 97, 101, 56, 87, 40];
function floorFinder(arr, target) {
    let floor = -1;
    let low = 0,
        high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            floor = mid;
            low = mid + 1;
        } else if (arr[mid] >= target) {
            high = mid - 1;
        }
    }
    return floor;
}

function ceilFloorBruteForce(arr, target) {
    let ceilValue = Infinity;
    let ceilIdx = -1;

    for(let i = 0;i<arr.length;i++){
        let currVal = arr[i];
        if(currVal > target){
            let distanceToCurrVal = currVal-target;
            let distanceToCeilVal = ceilValue-target;
            if(distanceToCeilVal > distanceToCurrVal){
                ceilValue = currVal;
                ceilIdx = i;
            }
        }
    }
    return [ceilIdx,ceilValue]
}

console.log(floorFinder(arr, 101));
console.log(ceilFloorBruteForce(badarr, 23));
