/*You are building a program that takes an array of numbers as input and you need to remove all the duplicates
from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
contains only the unique elements.*/

arr=[1,2,1,2,3,4,5,4]
filterArray(arr)
function filterArray(arr)
{
    let arraySet=new Set();
    arr.forEach(element => {
        arraySet.add(element);
    });
    console.log(arraySet);
}