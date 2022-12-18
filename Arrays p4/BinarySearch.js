let arr = [21, 32, 38, 40, 56, 76, 77, 87, 90, 97, 101];

function ceilFinder(arr, target) {
    let ceil = -1;
    let low = 0,
    high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] <= target) low = mid + 1;
        else {
            ceil = mid;
            high = mid - 1;
        }
    }
    return ceil;
}
console.log(ceilFinder(arr, 101));
