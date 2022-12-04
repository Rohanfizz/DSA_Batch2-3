let n = parseInt(process.argv[2]);

let stars = 1
let spaces = n/2;

for(let i = 1;i<=n;i++){
    for(let j = 1;j<=spaces;j++){
        process.stdout.write(" ");
    }
    for(let j = 1;j<=stars;j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");

    if(i<=n/2){
        spaces-=1;
        stars+=2;
    }else{
        stars-=2;
        spaces+=1;
    }
}