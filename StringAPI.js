//Long string literal

let longString =`This is sentence,this is sentence
This is sentence,this is sentence
This is sentence,this is sentence`;
console.log(longString);

let sentence = "This chapter introduces the concepts,objects and functions";
let sentenceObject = new String(sentence);
console.log(sentence);

//String APIs
console.log(sentence.charAt(10));
console.log(sentence.charCodeAt(10));//Gives ASCII value
console.log(sentence.concat('10'));
console.log(sentence.startsWith('This'));
console.log(sentence.endsWith('This'));
console.log(sentence.includes('the'));
console.log(sentence.indexOf('t'));
console.log(sentence.lastIndexOf('t'));
console.log(sentence.repeat(5));
console.log(sentence.replace("s","S"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.split(''));
console.log(sentence.substr(0,5));


