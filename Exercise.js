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
