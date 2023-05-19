var readline = require('readline-sync');

var opcao = 1
while (opcao != 0) {


    console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
    console.log("|                                             |")
    console.log("|     1 - Comprar Passagem                    |")
    console.log("|     2 - Consultar Voos                      |")
    console.log("|     3 - Mapa de Assentos                    |")
    console.log("|     4 - Emitir Ticket                       |")
    console.log("|     0 - Encerrar o Programa                 |")
    console.log("+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ +")

    opcao = readline.question("Digite uma Opcao: ")

    if (opcao == 1) {
        var nome = readline.question("Seu nome:");
        var sobrenome = readline.question("Seu sobrenome:");
        var idade = readline.question("Sua idade:");
        var assento = readline.question("seu assento:");
        var origem = readline.question("De onde ira sair:");
        var destino = readline.question("Para onde pretende ir:");
        console.log("+ _ _ _ _ _ _  Passagens Aéreas _ _ _ _ _ _ _ +");
        console.log("Você está em -> comprar Passagem  ");
        console.log("                                               ");
        console.log("Nome: " + nome);
        console.log("Sobrenome: " + sobrenome);
        console.log("Idade: " + idade);
        console.log("Assento: " + assento);
        console.log("Origem: " + origem);
        console.log("Destino: " + destino);
        var certo = readline.question("Informacoes corretas? sim/nao")
        if (certo = "sim") {
            console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
            console.log("Você está em -> comprar Passagem  ")
            console.log("")
            console.log("*Resumo da Compra*")
            console.log("")
            console.log("Cliente: " + nome + " " + sobrenome)
            console.log("Idade:" + idade)
            console.log("Assento: " + assento)
            console.log("Voo: " + origem + " x " + destino)
            console.log("Status do Voo: confirmado")
            console.log("")
            console.log("Valor: R$400,00")
        }
        else if (certo = "não") {

        }

    }
    else if (opcao == 2) {
        console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
        console.log("Você está em -> Consulta de Voos ")
        console.log("")
        console.log("Origem             x               Destino")
        console.log("-----------------------------------------------")
        console.log("")
        console.log("Presidente Prudente                São Paulo")
        console.log("São Paulo                Presidente Prudente")
        console.log("Presidente Prudente                    Japão")
        console.log("Presidente Prudente                    Paris")
    }
    else if (opcao == 3) {
        console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
        console.log("Você está em -> Mapa de Assentos ")
        console.log("")
        console.log("-----------------------------------------------")
        console.log("A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12")
        console.log("B1 B2 B3 B4 B5 B6 B7 B8 B9 B10 B11 B12")
        console.log("-----------------------------------------------")

    }
    else if (opcao == 4) {
        console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
        console.log("")
        console.log("Você está em -> Emitir Ticket")
        console.log("****************************************************")
        console.log("*  OBRIGADO POR VIAJAR CONASCO =P                  *")
        console.log("*                                                  *")
        console.log("*  Cliente: " + nome + "                               *")
        console.log("*  Idade: " + idade + "     Assento: " + assento + ".        *")
        console.log("*  Origem/Destino: " + origem + " > " + destino + ".          *")
        console.log("*  Status do Voo: confirmado                       *")
        console.log("****************************************************")
    }
    else if (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4 && opcao != 0) {
        console.log("Opcao Inexistente")
    }

    
    console.log("+ _ _ _ _ _ _  Passagens Áereas _ _ _ _ _ _ _ +")
    console.log("|                                             |")
    console.log("|     1 - Comprar Passagem                    |")
    console.log("|     2 - Consultar Voos                      |")
    console.log("|     3 - Mapa de Assentos                    |")
    console.log("|     4 - Emitir Ticket                       |")
    console.log("|     0 - Encerrar o Programa                 |")
    console.log("+ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ +")
    opcao = readline.question("Digite uma Opcao: ")


}


