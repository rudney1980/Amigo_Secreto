//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("amigo");         //variavel input ID="amigo"
    const addButton = document.getElementById("Adicionar");     //variavel button ID="Adicionar"
    const drawButton = document.getElementById("Sortear");      //variavel button ID="Sortear"
    const clearButton = document.getElementById("Limpar");      //variavel função nova button ID="limpar"
    const nameList = document.getElementById("listaAmigos");    //variavel que ira receber lista de nomes
    const result = document.getElementById("resultado");        //variavel que recebe o resultado da escolha aleatória
    let names = [];

//função para adicionar nomes a lista
    addButton.addEventListener("click", function () {
        const name = nameInput.value.trim();
        if (name == "") {
            alert("Inserir um nome válido!!")
        } else if (name && !names.includes(name)) {
            names.push(name);
            updateNameList();
            nameInput.value = "";
        }
    });

//função para escolher nome aleatório
    drawButton.addEventListener("click", function () {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            result.textContent = `Sorteado: ${names[randomIndex]}`;
        } else {
            result.textContent = "Nenhum nome disponível para sorteio.";
        }
    });

//função para limpar a lista
    clearButton.addEventListener("click", function () {
        names = [];
        updateNameList();
        result.textContent = "";
    });

//função par atualizar a lista de nomes inseridos
    function updateNameList() {
        nameList.innerHTML = names.map(name => `<li>${name}</li>`).join("");
    }
});