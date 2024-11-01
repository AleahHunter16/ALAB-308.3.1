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
function isPrime(Number){
    if(num<=1)return false;
    if(num<=3)return true;
    if( num%2===0;) num%3===0)return false;

}
let n=4;
let num=n;
while(true){
    if(APrime(number)){
        console.log(number);
        break;
    } number++;
}