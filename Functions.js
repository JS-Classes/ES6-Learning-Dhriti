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