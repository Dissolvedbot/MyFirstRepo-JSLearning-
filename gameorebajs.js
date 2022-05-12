
/* const myArray = [[1,2,3,4], "misha", 'mishka', [5,6,7,8,9]];


let arrayTest = myArray[1];
tesTuna = myArray[1][myArray.length -0 ];
myArray[1][myArray.length -0] += "O";
myArray[1][myArray.length -1] = "koko";
myArray[3][0] = 10;






console.log(arrayTest);
console.log(tesTuna);
console.log(myArray[1]);

console.log(myArray[3]);

*/


const secMyArray = [[10,11,12,13], [44,55,66]];

secMyArray[0][3] = 14;
secMyArray[0].push(13);
secMyArray[0].unshift(55);

secMyArray[1].pop();

secMyArray[1].shift();


console.log(secMyArray[0]);
console.log(secMyArray[1]);






function myFuncusha(num){

     arrayTomorrow = [[1,2,3,4], [5,6,7,8,9]]
    sub = 20;
    return  num += arrayTomorrow[0][3];
 
}




console.log(myFuncusha(4));

console.log(arrayTomorrow[1]);


console.log(typeof arrayTomorrow);

///////////////////////////////////////////////////
function ifFuncTest(mm){
    if (typeof arrayTomorrow === 'objject' || mm == 25){
        return "true ";
    } else if ( mm <= 20 && mm >=10) {
        return '20-10 shoris';
    }
    return "change this shit";
}
    console.log(ifFuncTest(10));


 let sum = 10;

function sumFunc() {
     var sum = sum +3;
}

function addFive(){
     sum += 5;
}

sumFunc();
addFive();

console.log(sum);

/////////////

let objIka = { 
    ika: 'barsa',
    misho: ['georgia', 1997
    ],
}

function testOfObjFun (enterObj, prop){
     res = 'k';
   if(enterObj.hasOwnProperty(prop)){
        res = enterObj.hasOwnProperty(prop);
     
   }

   return res;

};

console.log(testOfObjFun(objIka,'ikaa'));
////////////////////////////////////////////////////
//let proch = 1;
function letFunc (){
    var  proch = 1;
};



letFunc();

//console.log(proch)
console.log(letFunc())
/////////////////////////////////

function xFactor(x){
    if (x<=0){
        return 1;
    }else {
        return  xFactor(x -1) * x
    }
}

console.log(xFactor(3))




// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
/////

function countDown(par){

    if (par <=0){
        return ;
    }else {
        console.log(par)
        return  countDown(par -1)
    }
}

console.log(countDown(5))

// countDown via for loops

function countingDown(par){
    for (let i = par; par > 0; i--) {
        console.log(i);
        debugger;
    }
}

//console.log(countingDown(5))