               // warm up !!!
            
// 1 vowel count

const vowelCount = (string) => [...string].filter(c => 'aeiou'.includes(c.toLowerCase())).length;

console.log(vowelCount('aaaaygt'));            // 4
console.log(vowelCount('AAAA'));            // 4
console.log(vowelCount('fooOOo BAR baz QUX')); // 8
console.log(vowelCount('Hello, world!'));   // 3

// 2 Even or Odd

const evenOrOdd = (number) => number % 2===0 ? 'Even' : 'Odd';

 console.log(evenOrOdd(2)) // Even  
 console.log(evenOrOdd(5))//  Odd

 // 3 Get the middle Character


 const getMiddle = (s) => {
    let middle = "";
  
    if (s.length % 2 === 1) middle = [s[(s.length / 2) | 0]];
    else middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];
  
    return middle.join("");
  };
  
  console.log(getMiddle("A"));
  console.log(getMiddle("habib"));
  console.log(getMiddle("world"));
  console.log(getMiddle("chorba"));

  // 4 opposite number

  const newNumber = (num)=>{

  return  num* -1;
}

console.log(newNumber(1)) 
console.log(newNumber(2)) 
console.log(newNumber(5)) 
console.log(newNumber(10)) 
console.log(newNumber(15)) // output =[-1,-2,-5,-10,-15]

// 5 Mumbling

function accum(s) {
  return s.toLowerCase().split('').map((letter,i)=> letter.toUpperCase()+ letter.repeat(i)).join('-');
}
console.log(accum('abcd'))

// 6 you're a square !

const isSquare =(n)=>{
  n.isInteger(math.sqrt(n))

}
console.log(isSquare(30))

//7  trolls are attacking your comment section !

const disemVowel =str =>
str.replace(/[aeiou]/gi,'')

//8 highest and lowest 

const highAndLow = numbers => 
(split= numbers.split(' ').map(number),`${math.max(...split)}${math.min(...split)}`)


//9 Exes and Ohs

function XO(str) {
    return str.toLowerCase().match(/x/g || [])?.length === str.toLowerCase().match(/o/g || [])?.length;
}
console.log(XO('ooxx'));

//10 Square Every Digit

function squareDigits(num){
    return (""+ num).split("").map(number => number **2).join("")
}

//11 Shortest Word

const findShort = s =>
Math.min.apply(null, s.split(' ').map(element =>  element.length))



           // algorithms Tasks


   // task  1 is this a triangle ??

   function isTriangle(a,b,c) {
    return a + b > c && b + c > a && c + a > b
   }

   // task 2  find the next perfect square 

   function findNextSquare(sq){
    //return the next square if sq is a perfect square , -1 otherwise

    if(math.sqrt(sq)%1===0) {

    }
    return -1;
   }

                // Data types tasks

// task 1  Return negative 

function makeNegative(num){
    if( num <= 0){
        return num;

    }
    return num* -1;
}

// task 2 remove string spaces

 const noSpace = x => x.split(" ").join("");


              // Numbers tasks 

// task 1 basic mathematical operations

const basicOp =(operation, value1, value2) =>
eval(value1 + operation + value2)


// task 2  keep hydrated !

function litres(time) {
    return Math.floor(time*.5) ;
}
console.log(litres(20)); // output =10


              
              // strings tasks 

// task 1  Reversed strings

const solution = str =>
     [...str].reverse().join(''); 
     
// task 2  String ends with?

function solutionTwo  (str, ending) {
    if(typeof str != 'string' ||typeof ending != 'string'){
        return false
    }
    else if (str == '' || ending =='' ){
        return true
    }
    else {
        let result
        for (let i = ending.length ; i > 0; i--){
            if(str[str.length -1] == ending[ending.length - 1]){
                result =true 
            }else{
                        result = false
                        break
                    }
                }
                return result
            }
        }

    

             // array tasks !!

// task 1 counting sheep ...

function countSheeps(arrayOfSheep){
return arrayOfSheep.filter(sheep => !!sheep).length;
}

//task 2  one and zeros

const binaryArrayToNumber = arr =>
parseInt(arr.join(''),2) ;


             // object tasks 

 //task 1    Make a function that does arithmetic!
 
 function arithmetic(a,b, operator){
    switch(operator){
        case 'add': return a+b
        case 'substract': return a-b
        case 'multiply' : return a*b
        case 'divide' : return a/b
    }
 }


 //task 2  Regular Ball Super Ball

 var Ball = function(ballType = "regular"){
    this.ballType = ballType;
 }


                   // basic language futures tasks

// task 1 Grasshopper-summation

const summation = num => num *(1 + num) / 2;

// task 2 Jenny's secret message

const greet = name =>
name === "johnny"
? "HEllo, my love!"
: `Hello, ${name}!`;



                   // Conditional Statements (control Flow) tasks

 // task  1  Find the Capitals    
 
 function capLet(txt){
    let count=0;
    let arr = txt.split('')

    for (let i=0; i< arr.length; i++){
        if(arr[i] == arr[i].toUppercase()){
            count += 1
        }
    }
 }


 // task 2  plural 

function plural (n){
 return n !== 1;}


                    // Loops tasks

// task 1  Sentence Smash 

function smash (words){
    return  words.join(' ');
}
console.log(smash(['hello','world','this','is','great']))


// task 2 If you can't sleep, just count sheep!!

var countSheep = function (num){
    let sheepString = '';
    for (let i=1 ; i <= num ;i++){
        sheepString += i.toString() + ' sheep...'
    }
    return sheepString ;
}


                 // Changing Gears tasks
  
 // task 1 Multiple of  3 or 5
 
 function solutionThree (number){
    let sum = 0;
     for (let i = 1; i < number ; i++){
        if (!(i % 3) || !(i % 5)){
            sum += i;
        }
     }
 }


 // task 2 Sum of Digits / Digital Root

 function digitalRoot (n){
    if (n < 10 ) return n ;
    return digitalRoot (
        n.toString().split(''.map(Number).reduce((sum,num) =>{
            return sum += num;
        },0))
    )
 }


                      // Fire at will tasks 

// task 1   two sum problem 

const towSum = (nums, target) => {
    let storage ={} ;
    for (let [index, num] of nums.entries()) {
        if(storage[num] !== undefined)
        return [storage[num], index];
    storage[target-num] = index ;
    }

    }

  
    
// task 2  problem is to convert string to camelcase

function toCamelCase (str){
    const splittedArray = str.split(/[-_]/);
    const finalResult = splittedArray.map((word, index) =>{
        if (index ===0) {
            return word;
        }
        else{
            return word[0].toUpperCase() + word.slice(1);

        }
    });
    return finalResult.join("");
}
console.log(toCamelCase("I_Want-To_Eat-Chawarma"));



 












  


 


