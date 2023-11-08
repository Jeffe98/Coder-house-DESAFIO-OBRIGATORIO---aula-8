
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


function adicionarAoCarrinho(produto) {
    const carrinho = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");

    const li = document.createElement("li");
    li.innerHTML = `${produto.nome} - Preço: R$${produto.preco.toFixed(2)}`;
    carrinho.appendChild(li);

   
    let total = parseFloat(totalCarrinho.textContent);
    total += produto.preco;
    totalCarrinho.textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const botaoAdicionarProduto = document.getElementById("adicionar-produto");

    
    botaoAdicionarProduto.addEventListener("click", function () {
        const nomeProduto = document.getElementById("produto-nome").value;
        const precoProduto = parseFloat(document.getElementById("produto-preco").value);
        
        if (nomeProduto && precoProduto) {
            const produto = new Produto(nomeProduto, precoProduto);
            adicionarAoCarrinho(produto);

           
            document.getElementById("produto-nome").value = "";
            document.getElementById("produto-preco").value = "";
        }
    });
});
