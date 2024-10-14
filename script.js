var addButton = document.getElementById('addButton');
var itemInput = document.getElementById('itemInput');
var shoppingList = document.getElementById('shoppingList');
var errorFeedback = document.getElementById('errorFeedback');
var items = []; 

addButton.onclick = function() {
    var itemText = itemInput.value.trim();

   
    errorFeedback.textContent = '';
    itemInput.classList.remove('error');

    if (itemText === "") {
        errorFeedback.textContent = "Sem nada não vai, filhão.";
        itemInput.classList.add('error');
        return;
    }

    if (items.includes(itemText.toLowerCase())) {
        errorFeedback.textContent = "Esse tu ja pediu.";
        itemInput.classList.add('error');
        return;
    }

   
    items.push(itemText.toLowerCase());
    var li = document.createElement('li');
    li.textContent = itemText;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';

    deleteButton.onclick = function() {
        shoppingList.removeChild(li);
        items = items.filter(item => item !== itemText.toLowerCase());
    };

    li.appendChild(deleteButton);
    shoppingList.appendChild(li);
    
   
    requestAnimationFrame(() => {
        li.classList.add('show');
    });

    itemInput.value = "";
};
