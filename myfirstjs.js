

/*
function myFunc (par1, par2) {

    sum = par1 + par2 ;

}

funcHtml = myFunc(3,3);

*/

/*
function myFunc1 (num, num2) {

    console.log(num * num2);
}

myFunc1(3,3);


const x = timesFive (5, 2, 9);

function timesFive(num){
    return num * 5;
}

console.log(x);
*/

/*
var myGlobal = 10 ;

function fun1 (){
    oopsGlobal = 5 ;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }

    return output;
    console.log(output);
  }
*/

  /*var x = 10; // testing of  let const keywords global and block scope

  if (x == 10) {
      var x = 20; 
      console.log(x);
  }

  console.log(x); */
/*
  function functionOne () {
      let funcStr = "stingi"
      console.log(funcStr);
  }

functionOne(); //gamodzaxeba function-is gamoitans fucStr cvlads
*/


/*
var outWear = "T-shirt";

function myOutfit () {
    var outWear = "sweater"
    return outWear;
}



myOutfit();

console.log (outWear);
*/



/*
let sum = 10;

function addThree (){
 var sum = sum +3;
}

function addFive (){
  sum += 5;
}


addThree();
addFive();

console.log(sum);


let process = 0;

function processFunc (num){
return (num + 3) / 5;
}

process = processFunc(7);
*/


//Stand in Line

function queueLineNext (arr, item){
  arr.push(item);
  return arr.shift();
}

const testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(queueLineNext(testArr, 6));
console.log("After: " + JSON.stringify(testArr));






//Stand in Line queue

/* yleobaa
function arrFunc (xArray, item){
 xArray = [1,2,3,4,5];

xArray.push(item);
delElementArray = xArray.shift();
return delElementArray;

}

console.log(delElementArray);
arrFunc([], 5);
arrFunc([], 1);
*/


//Boolean type of data wich is true or false

function iftest (myCondition){
  if (myCondition){
    return "it was true";
  }

  return "it was false";
}

console.log(iftest(true));
console.log(iftest(false));


function trueOrFalse(booleanTest){
  if (booleanTest){
    return "It's true";
  }

  return "It's false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));


function compareBool (varOp) {

  if (varOp === "3" || varOp == 10 ) {
    return "Bulioni It's true";
    
  }

  return "It is false";
}

console.log(compareBool(3));

typeof 3 
typeof '3'



//ab = "";

function compareEquality (a, b){
  if (a === b){


    ab = a+b;
    return "ab variable is: " + ab;
  }

  return "It is not strict equal"

}

console.log(compareEquality(10, 10));


function inequalityOp (a, b){
  if (a != b){
    return  a +" is not equal to " + b;
    }

    return a + " is equal to " + b;
}

console.log(inequalityOp(50,66));


//copy paste
function testStrictNotEqual(val) {
  if (val !== 17 ) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


//tu 40-50 shoris aris val gamoitane inside tuarada outside

function testLogicalOr(val) {
  if (val < 40 || val > 50 ){
    return val +" is outside";
  }
  return val + " is inside";
}

console.log(testLogicalOr(60));


//if statemant with else statement + else if
//aseve shegidzlia bevri else if is gamoyeneba 

function numFunc(num){
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
}

console.log(numFunc(13));

//vcadot optimizacia

function numFunc1(num){
  if (num > 15 || num < 5) {
    return "outside";

  } else {
    return "inside";
 }

}

console.log(numFunc1(5));

/*The function is executed from top to bottom so
 you will want to be careful of what statement comes first.*/




 //Golf game code


const names = ["pirveli", "meore", "mesame", "meotxe"];

function golfCode(par, strokes){
  if (strokes === 1){
    return names[0]
  }
  else if (strokes <= par - 2){
    return names[1];
  } else if (strokes == par -1){
    return names[2];
  } else if (strokes == par ){
    return names[3];
  }
  return "change names";
}


console.log(golfCode(5,2));


// example of switch statements



function testSwitchStatements(sw1){
  let answer = "0000";
switch(sw1){
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "city";
    break;
  default:
    answer = "U must enter a, b or c to work switch statement";
    break;

  }

  return answer;

}

console.log(testSwitchStatements("a"));



//multiple identical options in switch statements

function multiCaseFunc(val){
  let result = "deff result"
  switch (val){
    case 1:
      case 2:
        case 3:
          result = "Range: 1-3";
          break;
    case 4:
      case 5:
        case 6:
          result = "Range: 3-6";
          break;

    default:
      result = "Default mode on";
  }

  return result;
}

console.log(multiCaseFunc(5));


// mere gateste switch statement massivit tu izav


// returning Boolean value from function

function boolReturnFromFunc(a, b){
  //return a === b;
  return a < b;
}

console.log(boolReturnFromFunc(9,10))






function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

/*The above will display the string Hello in the console, 
and return the string World. 
The string byebye will never display in the console,
 because the function exits at the return statement.*/

//როდესაც return მიღწეულია მიმდინარე ფუნქციის შესრულება წყდება
//and control returns to the calling location
function abTest(a, b) {
  // Only change code below this line
if (a < 0 || b < 0){
  return ;
  
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);


/////Error
/*
let count = 0;

function cc(card) {
  // Only change code below this line
switch (card){
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count++;
  break;
  case 7:
    case 8:
      case 9:
        break;
  case 10:
    case 'J':
      case 'Q':
        case 'K':
          case 'A':
  count--;
  break;  
}

  if (count === +1 ){
    return count + " Bet";
  } else if ( count === 0 || coutn === -1){
    return count + " Hold";
  }


  return "Change Me";
  // Only change code above this line
  

  
}


//cc(2); cc(3); cc(7); cc('K'); cc('A');

console.log(cc(2));

*/







  let count = 0;

function cc(card) {
  // Only change code below this line
  cards = [[2,3,4,5,6], [7,8,9], [10,'J', 'Q', 'K','A']];


//if (card == 2, 3, 4, 5, 6){
  if (card == cards[0][0]){
  count += 1;
  } //else if (card == 7, 8, 9 ){
  else if (card == cards[0][1]){
  count; 
  
} else if (card == cards[0][2]){
  count -= 1;  
}


 // return "Change Me";

  // Only change code above this line

  return count + " Hold";
}

console.log(cc(2), cc(4) );


function cdaJs(val){
  let result = "";
  const lookup = {
    1: "M", 2: "S", 3: 'G'
  };

  if (result = lookup[val]){
  return result;
  } return "FUCK";
}


console.log(cdaJs("S"));



///build object


const myCat = {
  "name": "mia",
  "legs": 4,
  "tails": 1,
  "friends": ["me", "michael"],
  "white space": ["testireba", 'space']

};

//[] agnishvnis dros shegidzlia gmaoiyeno space 
console.log(myCat["name"]);
console.log(myCat.legs);
console.log(myCat['white space']);




//Accessing Object Properties with Variables


const dogs = {
  Hunter: "Doberman",
  Mia: "Husky",
  Fido: "Mutt"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log (myBreed);

//Updating Object Properties

  const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog.legs = 2;
  ourDog["name"] = "Happy Coder";
ourDog.bark = "woof";
console.log(ourDog);
  
delete ourDog.bark;



//Using Objects for lookup

function objFunc (val){
  let rezultati = "";

  const objTest = {

    1: "misha", 2: 'misho',
    "lika": "nasha",
    "lile": ['satynavi', 'sajimi']

  };
  console.log(objTest.hasOwnProperty('lika'));

  rezultati = objTest[val];
  return rezultati;

}

console.log(objFunc('lile'));

//Testing Objects for Properties

//objTest.hasOwnProperty('lika');

function checkObj (obj, checkProp){

  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } return "NOT FOUND";

};

//Manipulating Complex Objects

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

myMusic[1] = {"artist": 'Michael', 
"title": 'Fuck my life', 
"release_year": 2022, 
"formats": ['CD', 'MP3', "WAV"]
};

console.log(myMusic[1].title);



//Accessing nested Obj

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

console.log(gloveBoxContents);








const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];
myPlants[1].bark = [];

console.log(myPlants[1].bark);


//Record Collection


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


//console.log(recordCollection[5439].albumTitle);
// Only change code below this line
function updateRecords(records, id, prop, value) {
   records = recordCollection

  if(prop != 'tracks' && value != ''){
    recordCollection[id][prop] = value;
  }
    else if (prop == 'tracks' && !(recordCollection.hasOwnProperty[id].tracks) ){
      recordCollection[id].tracks = [value];
    } else if (prop == 'tracks' && value != ''){
      recordCollection[id].tracks.push(value);
    } else if (value == ''){
      delete recordCollection[id][prop];
    }



  return records ;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


////////////////////////////////

//While loop 

const ourArr = [];
let i = 0;

while (i < 10){
  ourArr.push(i);
  i++;
};

console.log(ourArr);

//while loop example 2 

const mmArray = [];
let gem = 0;
while (gem <= 5){
  mmArray.unshift(gem);
  gem++;
};

console.log(mmArray);




// Firt JS file here we done cause of crashing index.html Sorry lets play on new js file good luck <3


// For loop

//For loops don't have to iterate one at a time. 
//By changing our final-expression, we can count by even numbers.



const chemiArray = [];

for ( let i = 1; i < 10; i +=2){
  chemiArray.push(i);
};
console.log(chemiArray + ' :Odd numbers');

// count backwards with a for loop

const chemikaiArray = [];

for ( let i =9; i>0; i -=2){
  chemikaiArray.push(i);
};

console.log(chemikaiArray);


// Iterate Through an Array with a for loop

//tot unda iyos 20

const arrchika = [2, 3, 4, 5, 6];

let tot = 0; 

for (let i =0; i < arrchika.length; i++){
  tot += arrchika[i];
};

console.log(tot); 



// /nesting for loops

// example one 

const masivi = [
    [1,2], [3, 4], [5, 6]
];

for ( let i = 0; i < masivi.length; i++){
  for ( let l = 0; l < masivi[i].length; l++){
    console.log(masivi[i][l]);
  }
}

console.log(masivi.length)

//////// example 2

const altaOkay = [[1,2,3], [4, 5, 6, 7], [8, 9, 10]];

function multiplyAll (arr){
  let product = 1;

    for (let i = 0; i < arr.length; i++ ){
      for (let l = 0; l < arr[i].length; l++){
        product *= arr[i][l];
      };
    };

    return product;
};

console.log(multiplyAll(altaOkay));

//Iterate with Javascript do...While loops
//one  example Do..while

function digomi (){ 
const digmisMasivi = []; 
let i =0; 

do {  digmisMasivi.unshift(i);
    i++;
    
} while ( i < 10);
  //console.log(i);
  return digmisMasivi;
  
};

console.log(digomi());

//seocnd only while

function nakhalovka() {
  const nadzaladevi = [];
  let i=10;

while (i<10){
  nadzaladevi.push(i);
  i++;
};
  return nadzaladevi;
};

console.log(nakhalovka());



//replace loops using recursion
const masProtein = [2,2,3,4,5] ;
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
};
console.log( multiply(masProtein, 3));

// answer is 12 // in this case if n = 3

//seocnd edition
//const masProtein2 = [2,2,3,4,5]
function multiFuck(arr, n){
  //const masProtein2 = [2,2,3,4,5]
  if (n <=0) {
    return 1;
  } else {
      return multiFuck(arr, n -1) * arr[n -1];
  }
};

console.log(multiFuck(masProtein, 3));;

// aqac 12 -- 3 is shemtxvevashi




////////////////testing//////////////// 

function subMassiveFunc(arr, n){
  if ( n <=0){
    return 0;
  }else {
     return subMassiveFunc(arr, n -1) + arr[0][n -1] + arr[1][ n-1];
  }



};

console.log(subMassiveFunc([[2,3,4,5], [5,4,3,2]], 3)); //19 2 +3 +5+4

/////////////////////////



const annArr = [[1,2,3,4], [5,6,7,8], 10];


///wtf1

let cvladi = annArr[1].length

function wtfFunction(arr, n){
  let product = [];
  if (n<=0){
    return product;
  }else {
    wtfFunction(arr, n -1) 
    return product.push(arr[0][n -1] * arr[1][n -1]);
  }
}

console.log(wtfFunction(annArr, cvladi));

///////WTF


/*
//const subArray = [[1,2,3,4], [5,6,7,8,9], 10];

function subArrayFunc (arr){
  let product = 0; 
  for (let i =0; i < arr[1].length; i++){
     return product = subArray[0] * subArray[1];
  }
    
}

console.log(subArrayFunc(subArray));

console.log(subArray[1].length)

//console.log(subArray[0]);



*/



