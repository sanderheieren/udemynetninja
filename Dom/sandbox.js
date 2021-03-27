const article = document.querySelector('article');
const button =  document.querySelector('button');

const children =  Array.from(article.children);
console.log(children);



button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent ='a new paragrapgh'
  article.append(li);
})

article.addEventListener('click', e => {
  console.log(e.target);
  if(e.target.tagName === "P"){
    e.target.remove();
  }
})

/**
 * <h1>The DOM</h1>

  <article>
    <p>new sibling</p>
    <h2>article title</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div>written by the net ninja</div>
  </article>

  <button>add text</button>
 */