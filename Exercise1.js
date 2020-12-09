
    const para = `For example, if you are designing a brand new website for someone, most times you will have to make sure the prototype looks finished by inserting text or photos or what have you. 
    The purpose of this is so the person viewing the prototype has a chance to actually feel and understand the idea behind what you have created.
    Now in some circumstances, designers may use squares and rectangles to help you visualize what should and could be in a specific location.
    We all have our own techniques, but one of the most effective techniques is to actually put some text where text goes and some 
    pictures where pictures go to make sure everyone can see the vision you’ve created.What do you think of it from the designs perspective?`

   countSentences(para);
function countSentences(paragraph)
{

    const re = /[.!?]/;
    const numOfSentences = paragraph.split(re);
   console.log (`The number of sentences in this paragraph is: ${numOfSentences.length - 1}`);
   
   
}
countCharacters(para);
function countCharacters(p)
{
    const numOfcharacters = p.split('');
    var spaceCount = (p.split(" ").length - 1);
   console.log (`The number of characters in this paragraph is: ${numOfcharacters.length - spaceCount }`);
   
}

countWords(para);
function countWords(pr)
{
    const numOfWords = pr.split(' ');
    console.log (`The number of words in this paragraph is: ${numOfWords.length}`);
   
}

countVowels(para);
function countVowels(par)
{
    const regex = /[aeiou]/g;
    const numOfVowels = par.match(regex);
    console.log (`The number of Vowels in this paragraph is: ${numOfVowels.length}`);

   
}

countConsonants(para);
function countConsonants(par)
{
    const regex = /[bcdfghjklmnpqrstvxzwy]/ig;
    const numOfConsonants = par.match(regex);
    console.log(`The number of consonants in this paragraph is: ${numOfConsonants.length}`);


   
}



