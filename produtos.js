
const produtos = {
  1: {
    nome: "Cosmético Natural",
    descricao: "Cosmético vegano e cruelty-free, desenvolvido com ingredientes naturais.",
    preco: "R$ 49,90",
    imagem: "img/produto01.jpg"
  },
  2: {
    nome: "Camiseta Sustentável",
    descricao: "Feita 100% de algodão orgânico, perfeita para quem busca estilo e consciência ambiental.",
    preco: "R$ 89,90",
    imagem: "img/produto02.jpg"
  },
  3: {
    nome: "Copo de Bambu",
    descricao: "Alternativa sustentável às garrafas plásticas, 100% biodegradável.",
    preco: "R$ 12,90",
    imagem: "img/produto03.jpg"
  },
  4: {
    nome: "Limpeza Eco",
    descricao: "Kit completo de limpeza com produtos ecológicos e biodegradáveis.",
    preco: "R$ 199,90",
    imagem: "img/produto04.jpg"
  },
  5: {
    nome: "Shampoo e Condicionador Eco",
    descricao: "Kit capilar sustentável, sem sulfatos e sem testes em animais.",
    preco: "R$ 149,90",
    imagem: "img/produto05.jpg"
  },
  6: {
    nome: "Cosmética Natural",
    descricao: "Linha de cosméticos naturais para cuidados diários.",
    preco: "R$ 29,90",
    imagem: "img/produto06.jpg"
  },
  7: {
    nome: "Kit Banheiro Sustentável",
    descricao: "Kit completo para banheiro feito com materiais recicláveis.",
    preco: "R$ 249,90",
    imagem: "img/produto07.jpg"
  },
  8: {
    nome: "Óleos Nutritivos",
    descricao: "Óleos naturais para cuidados da pele e cabelos.",
    preco: "R$ 179,90",
    imagem: "img/produto08.jpg"
  },
  9: {
    nome: "Bolsa Vegana",
    descricao: "Bolsa estilosa, feita com couro vegano ecológico.",
    preco: "R$ 229,90",
    imagem: "img/produto09.jpg"
  },
  10: {
    nome: "Detergente Eco",
    descricao: "Detergente biodegradável que cuida do meio ambiente.",
    preco: "R$ 29,90",
    imagem: "img/produto10.jpg"
  },
  11: {
    nome: "Chás Orgânicos",
    descricao: "Seleção de chás orgânicos para saúde e bem-estar.",
    preco: "R$ 49,90",
    imagem: "img/produto11.jpg"
  },
  12: {
    nome: "Caderno e Caneta Eco",
    descricao: "Conjunto de papel reciclado e caneta ecológica.",
    preco: "R$ 89,90",
    imagem: "img/produto12.jpg"
  },
  13: {
    nome: "Bolsa Ecológica",
    descricao: "Bolsa reutilizável feita com fibras naturais.",
    preco: "R$ 199,90",
    imagem: "img/produto13.jpg"
  },
  14: {
    nome: "Marmitex Eco",
    descricao: "Marmita reutilizável feita com material sustentável.",
    preco: "R$ 119,90",
    imagem: "img/produto14.jpg"
  }
};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (produtos[id]) {
  document.getElementById("produto-nome").innerText = produtos[id].nome;
  document.getElementById("produto-descricao").innerText = produtos[id].descricao;
  document.getElementById("produto-preco").innerText = produtos[id].preco;
  document.getElementById("produto-imagem").src = produtos[id].imagem;
  document.getElementById("produto-imagem").alt = produtos[id].nome;
} else {
  document.querySelector(".container .row").innerHTML =
    "<div class='col-12 text-center'><h3>Produto não encontrado</h3></div>";
}
