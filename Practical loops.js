// part one
const fizzbuzz=(n)=>{
    let out=''; if(n%3===0) out +="fizz";
    if(n%5===0) out =+ "buzz";
    return out===''?n:out;
};

for(let i=1;i<100;i++){
    console.log(fizzbuzz(i));
}

//part two
function isPrime(Number){
    if(number<=1)return false;
    if(number<=3)return true;
    if( number%2===0; number%3===0)return false;
}