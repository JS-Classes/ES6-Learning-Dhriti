// 1. Program to print multiplication table for a number
let number=2
for (i=0;i<=12;i++)
{
   const result =number*i;
   console.log(`${number} * ${i} = ${result}`)
}

// 2. Program to print multiplication table for a number upto some range (default should be 10)
function multiply(x,range=10)
{
for (i=0;i<=range;i++)
{
    const multiresult = x*i;
    console.log(`${x} * ${i}=${multiresult}`);
}
}
multiply (5)


// 3. Program to print multilication table for numbers from m to n.
function multiply1(x,y,range=10)
{
for (i=x;i<=y;i++)
{
    for (j=1;j<=range;j++)
    {
   var multiresult = x*j;
    console.log(`${x} * ${j}=${multiresult}`);}
    x++;
}
}
multiply1 (1,5)

const people = [
    {
        name : 'Bishnu',dob :'3434' ,isMale:true},
        {name : 'Bishnu',dob :'3434' ,isMale:true}
];

//Declare a string variable with paragraph as value.Find following:
//a.Number of sentences,words and characters
//b. Number of special charaters
//c. Number of vowels and consonant

let sentence = `For example, if you are designing a brand new website for someone, most times you will have to make sure the prototype looks finished by inserting text or photos or what have you. 
The purpose of this is so the person viewing the prototype has a chance to actually feel and understand the idea behind what you have created.
Now in some circumstances, designers may use squares and rectangles to help you visualize what should and could be in a specific location.
We all have our own techniques, but one of the most effective techniques is to actually put some text where text goes and some 
pictures where pictures go to make sure everyone can see the vision you’ve created.`
const endOfSen = /[.!?]/;
const numOfSentences = text.split(endOfSen;
console.log(numOfSentences.length - 1);