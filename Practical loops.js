// part one
const fizzbuzz =(n) =>{
    let out=''; 
    if(n % 3 === 0) out += "fizz";
    if(n % 5 ===0) out += "buzz";
    return out ===''? n : out;
};

for(let i = 1; i < 100; i++) {
    console.log(fizzbuzz(i));
}

//part two
function isPrime(Num) {
    if (num <= 1) return false;
    if ( num <= 3) return true;
    if ( num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num %ni === 0 || num % (i + 2) === 0) return false;
    }
    return true;

}
let n=4;
let num=n;
while(true){
    if(APrime(number)){
        console.log(number);
        break;
    } number++;
}