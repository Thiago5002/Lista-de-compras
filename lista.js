import { salvarItens, carregarItens } from './armazenamento.js';

let itens = [];

const adicionarItem = (textoItem, listaCompras, feedbackErro, inputItem) => {
    feedbackErro.textContent = '';
    inputItem.classList.remove('error'); 
    if (!textoItem) {
        feedbackErro.textContent = "Por favor, insira um item."; 
        inputItem.classList.add('error');
        return;
    }

    if (itens.includes(textoItem.toLowerCase())) {
        feedbackErro.textContent = "Esse item já foi adicionado.";
        inputItem.classList.add('error');
        return;
    }

    itens.push(textoItem.toLowerCase());
    salvarItens(itens);
    renderizarItem(textoItem, listaCompras);
    inputItem.value = '';
};

const renderizarItem = (textoItem, listaCompras) => {
    const li = document.createElement('li');
    li.textContent = textoItem;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'Excluir';
    botaoExcluir.onclick = () => removerItem(textoItem, li);
    
    li.appendChild(botaoExcluir);
    listaCompras.appendChild(li);
    
    requestAnimationFrame(() => {
        li.classList.add('show');
    });
};

const removerItem = (textoItem, li) => {
    listaCompras.removeChild(li);
    itens = itens.filter(item => item !== textoItem.toLowerCase());
    salvarItens(itens);
};

const carregarListaCompras = (listaCompras) => {
    itens = carregarItens();
    itens.forEach(item => renderizarItem(item, listaCompras));
};

export { adicionarItem, carregarListaCompras };
