// turn to string to save in local storage

const todos = [
  {
    text: 'play marikoart', author: 'sander'
  },
  {
    text: 'buy milk', author: 'einaer'
  },
  {
    text: 'play smash', author: 'thomas'
  }
];

 //console.log(JSON.stringify(todos));
 // save it as json string ini local
 localStorage.setItem('todos', JSON.stringify(todos));
 // retriebve it again and use
 const stored = localStorage.getItem('todos');
// will still look like a string now
 console.log(JSON.parse(stored));

 