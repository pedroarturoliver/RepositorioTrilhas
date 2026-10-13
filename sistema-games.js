const prompt = require("prompt-sync")();

let time = [];

let continuar = true

function mostrarMenu() {

    console.log("---------------------------")
    console.log("1 - Cadastrar");
    console.log("2 - Deleter");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cálculo da média da equipe");
    console.log("5 - Mostrar informações do jogador: ");
    console.log("6 - Atualizar pontos");
    console.log("7 - Sair");
    console.log("---------------------------")




}

function mostraEquipe() {

    if (time.length === 0) {
        return;
    }

    for(let i =0; i < time.length; i++) {

        let jogador = time[i]
        console.log((i + 1) + " Jogador nome: " + jogador.nome + " | Função:" + jogador.funcao + " | Pontuação " + jogador.pontuacao )

    }

}

function cadastrarJogador() {

    let nomeJogador = prompt("Digite o nome do usuário: ");
    let funcaoJogador = prompt("Digite da função do jogador: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    
    if(isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return;
    } else {
        let recruta = {

            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador

        }


        time.push(recruta);
        console.log("Jogador " + recruta + " foi cadastrador com sucesso! ")
        console.log("-------------------")

    }


}

function deletarJogador() {


    if(time.length === 0) {

        console.log("Nenhum jogador cadastrado")
        return;
    }


    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let indexDeletado = -1;


    for(let i=0; i < time.length; i++) {
        if(time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break                                                                                                                                                                                             
        }
    }



    if (indexDeletado === -1) {

        console.log("Jogador não encontrado")
        return

    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!");
    console.log("-----------------------------");


}

function calculoDaMedia() {
    if(time.length ===0 ) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let totalPontos = 0;

    for(let i =0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time possui uma pontuação média de: ", mediaPontos);
}



// O Desafio Final: Função de Busca 

function buscarJogador() {

    let encontrou = false; // Começamos assumindo que não encontramos ninguém 

    let nomeBuscado = prompt("Digite o nome  para ser buscado: ");

    console.log("Buscando por: " + nomeBuscado + "..."); 

    


    // O loop passa por todas as gavetas (posições) do nosso Array 

    for (let i = 0; i < time.length; i++) { 

        let jogadorAtual = time[i]; // Pegamos a ficha atual para ler 

        // Comparamos o nome da ficha com o nome procurado 

        if (jogadorAtual.nome === nomeBuscado) { 

            console.log("JOGADOR ENCONTRADO!");

            console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 

            encontrou = true; // Mudamos o status! 

            break; // Já achamos quem queríamos, podemos parar o loop 

        }
    }
    if (encontrou === false) { 

        console.log("O jogador " + nomeBuscado + " não faz parte da nossa equipe."); 
        return;
    } 

} 



function atualizarPontos() {

    let encontrou = false; // Começamos assumindo que não encontramos ninguém 

    let nomeBuscado = prompt("Digite o nome  para ser buscado: ");

    console.log("Buscando por: " + nomeBuscado + "..."); 

    


    // O loop passa por todas as gavetas (posições) do nosso Array 

    for (let i = 0; i < time.length; i++) { 

        let jogadorAtual = time[i]; // Pegamos a ficha atual para ler 

        // Comparamos o nome da ficha com o nome procurado 

        if (jogadorAtual.nome === nomeBuscado) {
            
            encontrou = true; // Mudamos o status! 

            let pontos = parseInt(prompt("Quantos pontos ele ganhou? "));

            jogadorAtual.pontuacao += pontos
            
            console.log(`SUCESSO! A pontuação de ${jogadorAtual.nome} .subiu para ${jogadorAtual.pontuacao} pontos`)
            

            break; // Já achamos quem queríamos, podemos parar o loop 

        }
    }
    if (encontrou === false) { 

        console.log("O jogador " + nomeBuscado + " não faz parte da nossa equipe."); 
        return;
    } 

} 




while(continuar == true) {


    mostrarMenu() 
    let opcao = prompt("Digite sua opção: ")

    if(opcao == "1") {
        cadastrarJogador();

    }

    else if ( opcao =="2" ) {
        deletarJogador();
    }


    else if ( opcao == "3") {

        mostraEquipe();
    }

    else if(opcao === "4" ) {

        calculoDaMedia()
    }

    else if(opcao == "5") {
         buscarJogador()
    }

     else if(opcao == "6") {
         atualizarPontos()
    }


    else if(opcao == "7") {
        continuar = false
    }

    else {
         
        console.log("Opção inválida, digite outra opção...");
    }


    }
