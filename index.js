// 1

const multiplesOfSixAndNine = () =>{
    for(let i = 1; i <= 100; i++){
        if(i % 6 === 0 && i % 9 === 0){
            console.log(i)
        }
    }
}

//multiplesOfSixAndNine();

//2

const greaterNum = (n1,n2) => {
   if (n1 === n2){
        return 'both integers are equal'

    } else if (n1 > n2){

        return n1;

    } else if(n2 < n1) {

        return n2;

    }   else {

        return null;

    }
}

//console.log(greaterNum(12,'6'))

//3 

const sumOfFourAndSix = () =>{
    let total = 0
    for(let i = 1; i <= 1000; i ++){
        if(i % 4 === 0 && i % 6 === 0) {
            total += i;
        }
    }
    return total;
}

//console.log(sumOfFourAndSix());

//4 

const oddAndEvenToN = (int) => {
    for( let i = 1; i <= int; i++){
        if( i % 2 === 0 ){
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`)
        }
    }
}

//oddAndEvenToN(5);

//5 

const sumOfNotDivisibleByTen = () => {
    let sum = 0
    for(let i = 1; i <= 1000; i++){
        if( i % 10 !== 0 ){
            sum += i;
        }
    }
    return sum;
}

//console.log(sumOfNotDivisibleByTen());

//6 

// const greaterNumb = (n1,n2,n3,n4) => {
//     let nums = (n1,n2,n3,n4)

//     if (nums.size === 2){

//         return 'Two integers are equal';

//     }  else if(nums.size === 3) {

//         return 'Three integers are equal';

//     }  else {

//         return Math.max(n1,n2,n3,n4);

//     }  

// }

// console.log(greaterNumb(10,10,4,6));
