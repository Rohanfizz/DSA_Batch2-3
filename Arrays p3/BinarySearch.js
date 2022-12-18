let arr = [14, 32, 33, 45, 47, 57, 58, 68, 69, 81, 83, 99, 100];

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] > target) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
}
console.log(binarySearch(arr,47));
console.log(binarySearch(arr,83));
console.log(binarySearch(arr,101));