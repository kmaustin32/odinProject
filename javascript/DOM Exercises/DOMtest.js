const container = document.querySelector('#container');
    
const para = document.createElement('p');
para.textContent = "Hey, I'm Red!";
para.style.cssText = 'color: red;';

container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';

container.appendChild(h3);

const div = document.createElement('div');
div.style.cssText = 'border: 5px solid black; background-color: pink';

const appH1 = document.createElement('h1');
appH1.textContent = "I'm in a div!";

const appP = document.createElement('p');
appP.textContent = "I am too!";

div.appendChild(appH1);
div.appendChild(appP);
container.appendChild(div);

