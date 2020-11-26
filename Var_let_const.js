var x = 56;
var x = 'ssdfd';
//console.log(x); // prints the latest value assigned to value x.Not a good implementation of var

//Redeclaration allowed
// 1000 lines of codes

//Var is function scoped or global
function add()
{
    var xx = "sdsjd"; //variable declared inside function can only be used for that function(function scoped)
}

//Var can be hoisted
console.log(age);
var age = 23;

//if variable declared outside function it is globally scoped and can be accessed anywhere

//Redeclaration not allowed 
//let y = 45;
//let y = 'sfsdf';

//but can mutate
let y = 45;
y = 'sfsdf';

//No mutation allowed
const z = true;
z = false;

//Block scoped :let and const both are block scope
function add1()
{
    var xx ="asdas";

    if(xx =="")
    {
        let x1=234.6;
    }
}