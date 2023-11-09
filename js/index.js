let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Contador de Jogadas
let player1 = 0;
let player2 = 0;

// Adicionar o evento de Click aos boxes
for(let i = 0; i< boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let el = checkElemento(player1, player2)

        // Verifica de Tem o X ou O
        if(this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl);

            // Computar Jogada
            if(player1 == player2) {
                player1++;
                if(secondPlayer == 'ai-players') {
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            // Quem venceu
            checkWinCondtion()
        }
    });
}

// Duas players ou AI
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        secondPlayer = this.getAttribute("id");
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
        // Tempo para aparecer o Tabuleiro 
        setTimeout(function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        },500)
    });
} 


// Quem vai jogar?
function checkElemento(player1, player2) {
    if(player1 == player2) {
        //  X
        el = x;
    } else {
        // O
        el = o;
    }
    return el
}

// Quem ganhou;
function checkWinCondtion() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //X
            declareWinner('x');
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            //O
            declareWinner('o');        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //X
            declareWinner('x');
        } else if(b4Child == 'o' && b4Child == 'o' && b6Child == 'o') {
            //O
            declareWinner('o');
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //X
            declareWinner('x');
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            //O
            declareWinner('o');
        }
    }

    // Vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //X
            declareWinner('x');
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            //O
            declareWinner('o');
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //X
            declareWinner('x');
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            //O
            declareWinner('o');
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //X
            declareWinner('x');
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            //O
            declareWinner('o');
        }
    }

    // Diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //X
            declareWinner('x');
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            //O
            declareWinner('x');
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //X
            declareWinner('x');
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            //O
            declareWinner('xo');
        }
    }

    // Deu Velha!
    let contador = 0;
    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            contador++;
        }
    }

    if(contador == 9) {
        declareWinner("Infelizmente Deu velha!")
    }
}

// Limpa o Jogo, mostra o vencedor e o placar

function declareWinner(winner) {
    let scorebardX = document.querySelector("#scoreboard-1");
    let scorebardO = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == "x") {
        scorebardX.textContent = parseInt(scorebardX.textContent) + 1;
        msg = "O Jogador 1 sagrou-se vencedor"
    } else if(winner == "o") {
        scorebardO.textContent = parseInt(scorebardO.textContent) + 1;
        msg = "O Jogador 2 sagrou-se vencedor"
    } else {
        msg = "Deu Velha!"
    }

    // Exibir MSG na Tela;
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Esconde MSG
    setTimeout(function() {
        messageContainer.classList.add("hide");
    }, 3000)

    //Zerar as jogadas
    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

// Ai game
function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            } 
        } else {
            filled++;
        }
    }
    if(counter == 0 && filled < 9) {
        computerPlay()
    }
}