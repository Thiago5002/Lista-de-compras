// js/principal.js
import { adicionarItem, carregarListaCompras } from './lista.js';

const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');
const shoppingList = document.getElementById('shoppingList');
const errorFeedback = document.getElementById('errorFeedback');

addButton.onclick = () => {
    const textoItem = itemInput.value.trim();
    errorFeedback.textContent = '';
    itemInput.classList.remove('error');
    
    adicionarItem(textoItem, shoppingList, errorFeedback, itemInput);
};

window.onload = () => {
    carregarListaCompras(shoppingList);
};
