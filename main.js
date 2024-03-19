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

// 7
 

const removeVowels = (string) => [...string].slice(c => 'aeiou').length;










  


 


