 //addTwoNumbers-- camelCase
// AddTwoNumbers--Pascalcase

function square(number) //dynamic so will get the datatype of input parameter and return parameter during runtime

{
   let squared=number*number;
   return squared;
}
let s=square(56);
console.log(s);

//Function expression:anonymous
var func1=function (number) 

{
   let squared=number*number;
   return squared;
}
let sa=func1(561);
console.log(sa);

//Arrow function
var fun2=number=> number*number;

(a,b) => {
   let sum = a + b;
   return sum;
}

//Closure
function outside(x)
{
function inside(y)
{
   return x + y;
}
return inside;
}

let inside_func = outside(10); // Give me a function that adds 10 to whatever comes to it
let result = inside_func(40);
console.log(result);

function addSquares(a,b){

   function square(x){
      return x * x;
   }

   let result = square(a) + square(b);
   return result;
}

let r = addSquares(3453,234);

//Example 3
let createPet = function (name)
{
   return{
      setName: function(newName){
         name=newName;
      },
      getName: function(){
         return name;
      }
   }
}

let dog = createPet('Rocky');
dog.setName('');

//Using Arrow function
let createPet = function (name)
{
   return{
      setName: newName => name = newName,
      getName: () => name
         
      }
 }

 //Parameters
 function formatName(name,address,salutation="Ms."){
    let completeName = salutation + "+" + name + "+" + address;
   return completeName;
}
let n = formatName("Bishnu","abc","Mr");
let n1 = formatName("Bishnu","abc");
console.log(n1);


//Rest parameters
function add (a,b,...moreArgs){
   console.log(a);
   console.log(a);
   console.log(a);
}

add (23,45);
add (23,34,45,56,67);