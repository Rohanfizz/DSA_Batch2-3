let arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
        let sum = 0;
        for (let k = i; k <= j; k++) {
            sum += arr[k];
        }
        if (sum == x) {
        }
    }
}
