// part one
const fizzbuzz=(n)=>{
    let out=''; if(n%3===0) out +="fizz";
    if(n%5===0) out =+ "buzz";
    return out===''?n:out;
};

for(let i=1;i<100;i++){
    console.log(fizzbuzz(i));
}