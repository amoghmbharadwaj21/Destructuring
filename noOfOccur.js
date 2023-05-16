/*
You are building a word count generator that will take a large string of text as input and output the words and
the number of times they are present in the string. Your task is to write a function that can count the
occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
assume that the string only contains alphabetic characters and spaces.
*/

let sentence='You are building a word count generator You are' 
let ans=wordCount(sentence)
console.log(ans)

function wordCount(str) {
    const words = str.split(' ');
    const wordMap = new Map();
    words.forEach(element => {
        if(wordMap.has(element))
        {
            wordMap.set(element,wordMap.get(element)+1)
        }
        else{
            wordMap.set(element,1)
        }
    });
    return wordMap;
  }