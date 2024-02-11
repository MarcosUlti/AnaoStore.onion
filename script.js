let carrinhoItens = [];

function adicionarAoCarrinho(nome, preco) {
    carrinhoItens.push({ nome, preco });
    exibirCarrinho();
    atualizarNumeroCarrinho();
    calcularTotalCarrinho();
}

function exibirCarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho");

    listaCarrinho.innerHTML = "";
    let total = 0;

    carrinhoItens.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(listItem);
        total += item.preco;
    });

    const totalItem = document.createElement("li");
    totalItem.innerHTML = `<h4>Total: R$ <span id="total">${total.toFixed(2)}</span></h4>`;
    listaCarrinho.appendChild(totalItem);
}

function atualizarNumeroCarrinho() {
    const carrinhoTexto = document.getElementById("carrinho-texto");
    carrinhoTexto.textContent = `Carrinho (${carrinhoItens.length})⠀⠀`;
}

function calcularTotalCarrinho() {
    const totalElemento = document.getElementById("total");
    let total = 0;

    carrinhoItens.forEach(item => {
        total += item.preco;
    });

    totalElemento.textContent = total.toFixed(2);
}