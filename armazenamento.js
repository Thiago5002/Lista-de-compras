export const salvarItens = (itens) => {
    localStorage.setItem('listaDeCompras', JSON.stringify(itens));
};

export const carregarItens = () => {
    const itens = localStorage.getItem('listaDeCompras');
    return itens ? JSON.parse(itens) : [];
};

export const limparItens = () => {
    localStorage.removeItem('listaDeCompras');
};
