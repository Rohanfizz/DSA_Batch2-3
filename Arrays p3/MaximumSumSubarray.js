let arr = [5, 2, -10, 3, -1, 2, 6, 14, -2, 1, -1, 3];

function bruteForce(arr) {
    let sp = -1;
    let ep = -1;
    let maxi = -1000;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let csum = 0;
            for (let k = i; k <= j; k++) csum += arr[k];

            if (csum > maxi) {
                maxi = csum;
                sp = i;
                ep = j;
            }
        }
    }
    return [sp, ep, maxi];
}
function kadanesAlgo(arr) {
    let osp = -1,
        oep = -1,
        omaxi = -10000;
    let csp = 0,
        cep = 0,
        csum = 0;

    while (cep < arr.length) {
        if (csum + arr[cep] >= arr[cep]) {
            csum = csum + arr[cep];
        } else {
            csp = cep;
            csum = arr[cep];
        }

        if (csum > omaxi) {
            osp = csp;
            oep = cep;
            omaxi = csum;
        }
        cep++;
    }
    return [osp, oep, omaxi];
}
console.log(bruteForce(arr));
console.log(kadanesAlgo(arr));
