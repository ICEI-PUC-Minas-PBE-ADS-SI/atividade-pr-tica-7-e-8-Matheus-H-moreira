const dados = [
    {
      "id": 1,
      "titulo": "Bife de boi",
      "descricao": "Delicioso bife.",
      "ingredientes": ["Carne bovina", "Sal", "Alho", "Óleo"],
      "categoria": "Carnes",
      "autor": "Claudia",
      "data": "06/04/2025",
      "imagem": "imagens/prato1.jpg"
    },

    {
        "id": 2,
        "titulo": "Macarrão",
        "descricao": "Delicioso macarrão",
        "ingredientes": ["Macarrão", "Molho de tomate", "Queijo ralado"],
        "categoria": "Massas",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato2.jpg"
      },

      {
        "id": 3,
        "titulo": "Salada",
        "descricao": "Deliciosa salada",
        "ingredientes": ["Alface", "Tomate", "Cenoura", "Azeite", "Vinagre"],
        "categoria": "Saudável",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato3.jpg"
      },

      {
        "id": 4,
        "titulo": "Nachos",
        "descricao": "Deliciosos nachos",
        "ingredientes": ["Tortilla chips", "Queijo cheddar", "Carne moída", "Pimenta jalapeño"],
        "categoria": "Rápidas",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato4.jpg"
      },

      {
        "id": 5,
        "titulo": "Espetinho",
        "descricao": "Delicioso espetinho",
        "ingredientes": ["Camarão", "Pimentão", "Cebola", "Sal grosso", "Azeite"],
        "categoria": "Peixes",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato5.jpg"
      },

      {
        "id": 6,
        "titulo": "Frango ao molho tarê",
        "descricao": "Delicioso frango",
        "ingredientes": ["Frango", "Molho tarê", "Gergelim", "Cebolinha"],
        "categoria": "Carnes",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato6.jpg"
      },

      {
        "id": 7,
        "titulo": "Frango frito",
        "descricao": "Deliciosa fritura",
        "ingredientes": ["Frango", "Farinha de trigo", "Óleo", "Sal", "Pimenta"],
        "categoria": "Carnes",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato7.jpg"
      },

      {
        "id": 8,
        "titulo": "Bolinho de azeitona",
        "descricao": "Delicioso bolinho",
        "ingredientes": ["Farinha de trigo", "Ovo", "Azeitona", "Fermento", "Leite"],
        "categoria": "Receitas da vovó",
        "autor": "Claudia",
        "data": "06/04/2025",
        "imagem": "imagens/prato8.jpg"
      }
]

document.getElementById('1').onclick = function(){abrirDetalhes(1)}
document.getElementById('2').onclick = function(){abrirDetalhes(2)}
document.getElementById('3').onclick = function(){abrirDetalhes(3)}
document.getElementById('4').onclick = function(){abrirDetalhes(4)}
document.getElementById('5').onclick = function(){abrirDetalhes(5)}
document.getElementById('6').onclick = function(){abrirDetalhes(6)}
document.getElementById('7').onclick = function(){abrirDetalhes(7)}
document.getElementById('8').onclick = function(){abrirDetalhes(8)}

function abrirDetalhes(id){
  window.location.href = `detalhes.html?id=${id}`
  
}