const container = document.querySelector('#container');
    
const para = document.createElement('p');
para.textContent = "Hey, I'm Red!";
para.style.cssText('color: red;');

container.appendChild(p);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

container.appendChild(h3);