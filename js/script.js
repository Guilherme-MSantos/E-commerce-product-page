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

//* ADICIONAR NO CARRINHO
let cart = document.getElementById("cart");

function VisualizarCompra() {
  alert("vc não comprou nada ainda");
}

//* VISUALIZAR ITEMS NO CARRINHO

//*Produtos
let Image01 = document.getElementById("img01");
let Image02 = document.getElementById("img02");
let Image03 = document.getElementById("img03");
let Image04 = document.getElementById("img04");

let ProdutoThumbnail = document.getElementById("Produto-thumbnail-img");

ProdutoThumbnail.innerHTML = `  <img src="./images/image-product-1.jpg" alt="" class="produto" />`;

//* trocar imagem
function Trocar(img) {
  let paremetro = img;

  if (paremetro === Image01) {
    ProdutoThumbnail.innerHTML = `  <img src="./images/image-product-1.jpg" alt="" class="produto" />`;
  }
  if (paremetro === Image02) {
    ProdutoThumbnail.innerHTML = `  <img src="./images/image-product-2.jpg" alt="" class="produto" />`;
  }
  if (paremetro === Image03) {
    ProdutoThumbnail.innerHTML = `  <img src="./images/image-product-3.jpg" alt="" class="produto" />`;
  }
  if (paremetro === Image04) {
    ProdutoThumbnail.innerHTML = `  <img src="./images/image-product-4.jpg" alt="" class="produto" />`;
  }
  //
}
