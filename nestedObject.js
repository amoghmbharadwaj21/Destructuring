/*Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.*/

const person = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '12345'
    }
  };

  objectDestructure(person)

  function objectDestructure(person)
  {
    const {name,address:{street}}=person;
    console.log({name,street})
  }