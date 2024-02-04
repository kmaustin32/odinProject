const input = document.querySelector('input');
const shoppingList = document.querySelector('ul');
const addButton = document.querySelector('#addButton');

addButton.addEventListener('click', () => {
  addItemToList();
});

document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter') {
    addItemToList();
  };
  return;
});

function addItemToList() {
  let itemName = input.value;
  input.value = '';

  let newLi = document.createElement('li');
  let newSpan = document.createElement('span');
  let newButton = document.createElement('button');

  newSpan.textContent = itemName;
  newButton.textContent = 'Delete';
  
  newLi.appendChild(newSpan);
  newLi.appendChild(newButton);

  shoppingList.appendChild(newLi);

  newButton.addEventListener('click', () => {
    shoppingList.removeChild(newLi);
    input.focus();
  });
};