// store date inn local storage (set it)
//must be string, so 50 becomes  a  string
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);


// get date from local storage
// retreieve and use
// if i comment out the setItem now it will still
// be shown in the console becuase its saved
// in the local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
console.log(name, age);  

// update (will overwrite if same key or make a new one)

localStorage.setItem('name', 'luigi')
localStorage.age = 40; // will be string

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

// deleting data from local storage
//localStorage.removeItem('name');
localStorage.clear();

name = localStorage.getItem('name')
age = localStorage.getItem('age');

console.log(name);  