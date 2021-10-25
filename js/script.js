let Adicionar = document.getElementById("Adicionar");
let Remover = document.getElementById("Remover");
let Quantidade = document.getElementById("ProdutoQuantidade");

var contador = 0;

function AdicionarProduto() {
  contador += 1;
  return (Quantidade.innerHTML = ` <p>${contador}</p> `);
}
function RemoverProduto() {
  contador -= 1;
  if (contador < 0) {
    return (contador = 0);
  } else {
    return (Quantidade.innerHTML = ` <p>${contador}</p> `);
  }
}

Quantidade.innerHTML = ` <p>${contador}</p> `;
