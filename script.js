function alterarQuantidade(button, change) {
    const input = button.parentNode.querySelector('.input-quantidade');
    let quantidade = parseInt(input.value);
    quantidade += change;

    if (quantidade < 1) {
        quantidade = 1; // não permitir quantidade menor que 1
    }

    input.value = quantidade;
    calcularTotal();
}

function removerProduto(button) {
    const produto = button.closest('.produto-carrinho');
    produto.remove();
    calcularTotal();
}

function calcularTotal() {
    const produtos = document.querySelectorAll('.produto-carrinho');
    let total = 0;

    produtos.forEach(produto => {
        const precoText = produto.querySelector('.preco').innerText.replace('R$ ', '').replace(',', '.');
        const quantidade = produto.querySelector('.input-quantidade').value;
        total += parseFloat(precoText) * parseInt(quantidade);
    });

    document.getElementById('total-preco').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}
