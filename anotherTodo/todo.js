const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'Hello there'
  ul.append(li);
})

ul.addEventListener('click', e => {
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }
})

const form = document.querySelector('.sign-up');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(form.username.value);
  console.log(form.password.value);
})